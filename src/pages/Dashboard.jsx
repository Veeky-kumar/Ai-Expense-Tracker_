import React, { useEffect, useState } from 'react'
import { CardComponent } from '../components/common/CardComponent'
// import LineChart from '../components/charts/LineChart'
import ExpenseGraphCard from '../components/ExpenseGraphCard'
import { Blockquote, Button, Card } from 'flowbite-react'
// import ExpenseForm from '../components/expenseForm/ExpenseForm'
import ExpenseList from '../components/expenseForm/ExpenseList'
import AddFinancialInfo from '../components/expenseForm/AddFinancialInfo.jsx'
import { fetchChatInsight, getExpenseList, getFinancialInfo, setFinancialInfo } from '../api/expenseApi'

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [financialData, setFinancialData] = useState(null);
  const [expenseList, setExpenseList] = useState(null);
  const [budget, setBudget] = useState(null);
  const [spent, setSpent] = useState(null);
  const [remain, setRemain] = useState(null);
  const [savingsGoal, setSavingsGoal] = useState(null);
  const [aiInsight, setAiInsight] = useState("");
  const handleModal = () => {
    setOpenModal(!openModal);
    console.log('handleModal', openModal);
  }
  const handleCallback = (data) => {
    console.log("Received data from child:", data);
    setFinancialData(data); 

  };
  // const formData = new FormData();
     
  useEffect(()=>{
    const expenseList = async () => {
      try {
        const response = await getExpenseList();
        if(response){
          setExpenseList(response.data);
          // console.log(response.data);
//           formData.append("financialData", JSON.stringify(response.data));
// console.log(formData)
        }
      } catch (error) {
        console.log("Error while list fetching", error);
      }
    }
    const getfinancialDetails = async () => {
      try {
        const response = await getFinancialInfo();
        if(response){
          setFinancialData(response.userDetails[0]);
          setBudget(response.userDetails[0].budget)
          setSavingsGoal(response.userDetails[0].savingsGoal)
          // console.log(response.userDetails[0]);

          // formData.append("expenseList", JSON.stringify(response.userDetails[0]));

        }
      } catch (error) {
        console.log("Error while list fetching", error);
      }
    }
    getfinancialDetails()
    expenseList()
  },[])
  const getInsight = async () => {
    try {
      // Ensure financial data is ready
      if (financialData) {
        const messageContent = `in concise Budget is ${budget} and savings goal is ${savingsGoal}`;
  
        // Create the JSON body to send in the request
        const requestBody = { message: messageContent };
  
        // Log the request body to verify
        console.log("Request body to send:", requestBody);
  
        // Send the request to the backend API
        const insight = await fetchChatInsight(requestBody);
  
        // Set the AI insight response
        setAiInsight(insight.data);
        console.log("AI Insight Received:", insight);
      } else {
        console.log("Financial data is not ready yet.");
      }
    } catch (error) {
      console.error("Error getting insight:", error);
    }
  };
  
  
  
  return (
    <div className=''>
        <div>
        <Card  className="max-w- min-w-64 mb-5  ">
            <Blockquote className=" italic text-md font-medium text-gray-600 dark:text-gray-300">
            "🤖✨ Hi! I’m your AI assistant here to help you manage expenses 💰 and achieve financial freedom 🚀."
            </Blockquote>
            <Blockquote className=" italic text-md font-medium text-gray-600 dark:text-gray-300">
            {aiInsight?aiInsight:""}
            </Blockquote>
            
            <Button  gradientDuoTone="purpleToPink" className='min-w-32'
            onClick={getInsight}
            >
        get Insight
      </Button>
        </Card>
        
        </div>
        <Card className="max-w- min-w-64 mb-5 hover:bg-[#E5E7E] ">

          <div className='pb-5'>
            <Button  gradientDuoTone="purpleToPink" className='min-w-32'
            onClick={handleModal}
            >
        Edit
      </Button>

          </div>

        <div className='flex gap-6 flex-wrap pb-4'>
            <CardComponent title={"Budget"} amount={budget}/>
            <CardComponent title={"Remaining"}amount={"30,000"}/>
            <CardComponent title={"Spent"}amount={"30,000"}/>
            <CardComponent title={"Savings Goal"}amount={savingsGoal}/>
        </div>
        </Card>
            {/* <Button gradientDuoTone="purpleToPink"
              onClick={()=>handleModal()}
            >
              Add Expenses
            </Button> */}

        <div className='mb-5'>
            <ExpenseGraphCard/>
        </div>
        <div>
        <ExpenseList/>
        </div>
       {openModal&& (<AddFinancialInfo isOpen={openModal} onClose={handleModal} callback={handleCallback}/>)}
    </div>
  )
}

export default Dashboard
