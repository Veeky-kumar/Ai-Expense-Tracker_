import Expense from "../models/expense.js";
import User from "../models/user.js";


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
const setFinancialInfo = async (req, res) => {
    try {
        const {budget, savingsGoal } = req.body;
        const newUser = new User({ budget, savingsGoal });
        await newUser.save();
        // console.log("inside controller", newUser);
        res.status(201).json({ user: newUser, message: "User created successfully" });
    } catch (error) {
        res.status(404).json({ error: error, message:" Error"});
    }
}

const editFinancialInfo = async (req, res) => {
    try {
        const { budget, savingsGoal } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { budget: budget }, 
            { budget, savingsGoal }, 
            { new: true, upsert: true } 
        );

        res.status(200).json({ user: updatedUser, message: "Financial information updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Error updating financial information" });
    }
};


const getExpenseList = async (req, res) => {
    try {
        const allExpense = await Expense.find({ });
        // console.log("inside controller", allExpense);
        res.status(201).json({ expense: allExpense, message: "Expense fetched successfully" });
    } catch (error) {
        res.status(404).json({ error: error, message:" Error"});
    }
}
const getFinancialInfo = async (req, res) => {
    try {
        const allUsers = await User.find({ });
        // console.log("inside controller", allUsers);
        res.status(201).json({ userDetails: allUsers, message: "fetched successfully" });
    } catch (error) {
        res.status(404).json({ error: error, message:" Error"});
    }
}

export {
    createExpense,
    getExpenseList,
    setFinancialInfo,
    editFinancialInfo,
    getFinancialInfo,
}