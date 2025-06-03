import mongoose from "mongoose";
import logger from "../utils/logger";
import config from "./config";

export const dbConnect = async (): Promise<void> => {
  try {
    if (!config.mongoUrl) {
      logger.error("❌ MONGO_URL is not defined in config");
      process.exit(1);
    }

    const connection = await mongoose.connect(config.mongoUrl);
    logger.info(`✅ DATABASE CONNECTED → Host - ${connection.connection.host} , port :-  ${connection.connection.port} and database :-  ${connection.connection.name} \n`);
  } catch (error: any) {
    logger.warn("⚠️ DATABASE CONNECTION FAILED");
    logger.error(error.message || "Unknown DB connection error");
  }
};
