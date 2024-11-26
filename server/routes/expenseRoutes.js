import express from 'express';
import { createExpense, editFinancialInfo, getExpenseList, getFinancialInfo, setFinancialInfo } from '../controllers/expenseController.js';
const router = express.Router();

router.post('/create-expense', createExpense);
router.get('/get-expense', getExpenseList);
router.post('/set-financial-info', editFinancialInfo);
router.get('/get-financial-info', getFinancialInfo);

export { router as expenseRoutes };
