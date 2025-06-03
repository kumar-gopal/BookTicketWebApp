import express from 'express';
import {globalErrorHandler} from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "Welcome to Book My Ticket API",
    status: "success"
  });
});

// Routes
// app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(globalErrorHandler);

export default app;