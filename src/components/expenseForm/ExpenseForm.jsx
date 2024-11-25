import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ExpenseForm = ( { isOpen, onClose }) => {
  const [openModal, setOpenModal] = useState(true);
  const [name, setExpenseName] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setExpenseName('');
  }

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={isOpen} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Expenses</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Expense Name"
                value={name}
                onChange={(event) => setExpenseName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="expenseCost" value="Cost" />
              </div>
              <TextInput id="expenseCost" type="number" required />
            </div>

            <div className="flex justify-center">
              <Button gradientDuoTone="purpleToPink" size="md" className="w-[100px]">Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExpenseForm;