import express from 'express';
import {globalErrorHandler} from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "Welcome to Book My Ticket API",
    status: "success",
    Founder : "Gopal kumar"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "If you are seeing this, it means the server is running successfully.",
    status: "success"
  });
}
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is a simple API for managing items.and testing the server",
    status: "success",
    version: "1.0.0", 
  });
});

// Routes
// app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(globalErrorHandler);

export default app;