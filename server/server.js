import express from 'express';
import dotenv from "dotenv"
import connectDB from './config/db.js';
import { expenseRoutes } from './routes/expenseRoutes.js';
import cors from "cors";
import { chatRoutes } from './routes/chatRoutes.js';

dotenv.config(); 

// Connect to the database
connectDB();

const app = express();
app.use(express.json());  // Parse incoming JSON requests
app.use(cors({ origin: "*" }));

// Use routes
// app.use("/api/budgets", budgetRoutes);
app.use("/api/expenses", expenseRoutes);
// API routes
app.use("/api", chatRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
