import { Button, Card, Checkbox, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { getExpenseList } from "../../api/expenseApi.js";
import DateFormatter from "../../helpers/DateFormatter.jsx";

const ExpenseList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [expenseList, setExpenseList] = useState([]);
  const handleModal = () => {
    setOpenModal(!openModal);
    console.log("handleModal", openModal);
  };
  useEffect(()=>{
    const expenseList = async () => {
      try {
        const response = await getExpenseList();
        if(response){
          setExpenseList(response.data);
          console.log(response);
        }
      } catch (error) {
        console.log("Error while list fetching", error);
      }
    }
    expenseList()
  },[])
  return (
    <Card className="overflow-x-auto">
      <div>
        <Button gradientDuoTone="purpleToPink" onClick={() => handleModal()}>
          Add Expenses
        </Button>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            {/* <Checkbox /> */}
          </Table.HeadCell>
          <Table.HeadCell>Expense name</Table.HeadCell>
          <Table.HeadCell>Date & Time</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
{expenseList.map((item)=>
 <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
 <Table.Cell className="p-4">
   <Checkbox />
 </Table.Cell>
 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
   {item.name} 
 </Table.Cell>
 <Table.Cell>{DateFormatter(item.data)}</Table.Cell>
 <Table.Cell>{item.category}</Table.Cell>
 <Table.Cell>{item.amount}</Table.Cell>
 <Table.Cell className=" flex">
   <a
     href="#"
     className=" text-cyan-600 hover:underline dark:text-cyan-500"
   >
     <MdEditNote />
   </a>
   <a
     href="#"
     className="  text-cyan-600 hover:underline dark:text-cyan-500"
   >
     <MdDelete />
   </a>
 </Table.Cell>
</Table.Row>
)}
         


          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Grocery Shopping
            </Table.Cell>
            <Table.Cell>Apr 23, 2024</Table.Cell>
            <Table.Cell>Utilities</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell className=" flex">
            <a
                href="#"
                className=" text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <MdEditNote />
              </a>
              <a
                href="#"
                className="  text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <MdDelete />
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Accomodatioin Bill
            </Table.Cell>
            <Table.Cell>Apr 23, 2024</Table.Cell>
            <Table.Cell>Entertainment</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell className=" flex">
            <a
                href="#"
                className=" text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <MdEditNote />
              </a>
              <a
                href="#"
                className="  text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <MdDelete />
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {openModal && <ExpenseForm isOpen={openModal} onClose={handleModal} />}
    </Card>
  );
};

export default ExpenseList;
