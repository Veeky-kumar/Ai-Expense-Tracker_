// import React, { useState } from 'react'
import { CardComponent } from '../components/common/CardComponent'
// import LineChart from '../components/charts/LineChart'
import ExpenseGraphCard from '../components/ExpenseGraphCard'
import { Blockquote, Button, Card } from 'flowbite-react'
// import ExpenseForm from '../components/expenseForm/ExpenseForm'
import ExpenseList from '../components/expenseForm/ExpenseList'

const Dashboard = () => {
  // const [openModal, setOpenModal] = useState(false);
  // const handleModal = () => {
  //   setOpenModal(!openModal);
  //   console.log('handleModal', openModal);
  // }
  return (
    <div className=''>
        <div>
        <Card href="#" className="max-w- min-w-64 mb-5 ">
            <Blockquote className="italic text-md font-medium text-gray-600 dark:text-gray-300">
            "🤖✨ Hi! I’m your AI assistant here to help you manage expenses 💰 and achieve financial freedom 🚀."
            </Blockquote>
        </Card>
        </div>

        <div className='flex gap-6 flex-wrap pb-4'>
            <CardComponent title={"Budget"} amount={"40,000"}/>
            <CardComponent title={"Remaining"}amount={"30,000"}/>
            <CardComponent title={"Spent"}amount={"30,000"}/>
        </div>
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
       {/* {openModal&& (<ExpenseForm isOpen={openModal} onClose={handleModal} />)} */}
    </div>
  )
}

export default Dashboard
