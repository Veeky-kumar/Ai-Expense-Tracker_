import express from 'express';
import { createExpense, getExpenseList } from '../controllers/expenseController.js';
const router = express.Router();

router.post('/create-expense', createExpense);
router.get('/get-expense', getExpenseList);

export { router as expenseRoutes };
