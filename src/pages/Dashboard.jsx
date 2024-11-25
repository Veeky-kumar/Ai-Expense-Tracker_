import React from 'react'
import { CardComponent } from '../components/common/CardComponent'
import LineChart from '../components/charts/LineChart'
import ExpenseGraphCard from '../components/ExpenseGraphCard'
import { Blockquote, Card } from 'flowbite-react'

const Dashboard = () => {
  return (
    <div>
        <div>
        <Card href="#" className="max-w- min-w-64 mb-5 ">
            <Blockquote className="italic text-md font-medium text-gray-600 dark:text-gray-300">
            "🤖✨ Hi! I’m your AI assistant here to help you manage expenses 💰 and achieve financial freedom 🚀."
            </Blockquote>
        </Card>
        </div>

        <div className='flex gap-6 flex-wrap pb-4'>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>

        </div>

        <div className=''>
            <ExpenseGraphCard/>
        </div>
    </div>
  )
}

export default Dashboard
