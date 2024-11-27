import axios from "axios";
const API_BASE_URL = "https://ai-expense-tracker-ckpm.onrender.com/api"; 
// const API_BASE_URL = "http://localhost:5000/api"; 

const createExpense = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses/create-expense`, formData);
    return {data:response.data.expense, message: response.data.message};
  } catch (error) {
    console.error("Error creating expense:", error.response?.data || error.message);
    throw error; 
  }
};
const setFinancialInfo = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses/set-financial-info`, formData);
    return {data:response.data.expense, message: response.data.message};
  } catch (error) {
    console.error("Error setting budget:", error.response?.data || error.message);
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
const getFinancialInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses/get-financial-info`);
    return response.data;
  } catch (error) {
    console.error("Error getting info:", error.response?.data || error.message);
    throw error; 
  }
};

const fetchChatInsight = async (requestBody) => {
  try {
    console.log("Sending chat insight request with body:", requestBody);
    const response = await axios.post(`${API_BASE_URL}/chat`, requestBody, {
      headers: {
        "Content-Type": "application/json", 
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching chat insight:", error);
    throw error;
  }
};



export { createExpense, getExpenseList, setFinancialInfo,getFinancialInfo, fetchChatInsight };
