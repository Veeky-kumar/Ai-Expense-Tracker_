import axios from "axios";
const API_BASE_URL = "https://ai-expense-tracker-ckpm.onrender.com/api"; 

const createExpense = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses/create-expense`, formData);
    return response.data;
  } catch (error) {
    console.error("Error creating expense:", error.response?.data || error.message);
    throw error; 
  }
};
const getExpenseList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses/get-expense`);
    return {data:response.data.expense, message: response.data.message};
  } catch (error) {
    console.error("Error getting expense:", error.response?.data || error.message);
    throw error; 
  }
};



export { createExpense, getExpenseList };
