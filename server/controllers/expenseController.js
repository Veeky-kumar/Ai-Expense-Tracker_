import Expense from "../models/expense.js";


const createExpense = async (req, res) => {
    try {
        const {name,category, amount } = req.body;
        const newExpense = new Expense({ name, category, amount });
        await newExpense.save();
        // console.log("inside controller", newExpense);
        res.status(201).json({ expense: newExpense, message: "Expense created successfully" });
    } catch (error) {
        res.status(404).json({ error: error, message:" Error"});
    }
}

const getExpenseList = async (req, res) => {
    try {
        const allExpense = await Expense.find({ });
        // console.log("inside controller", allExpense);
        res.status(201).json({ expense: allExpense, message: "Expense fetched successfully" });
    } catch (error) {
        res.status(404).json({ error: error, message:" Error"});
    }
}

export {
    createExpense,
    getExpenseList,
}