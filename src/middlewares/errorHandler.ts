// src/middleware/errorHandler.ts

import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

// Custom API Error Class
export class ApiError extends Error {
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}

// Async Error Handler for wrapping async functions
export const asyncErrorHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};



export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  logger.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "fail",
      message: "Validation Error",
    });
  }

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "An unexpected error occurred",
  });
};