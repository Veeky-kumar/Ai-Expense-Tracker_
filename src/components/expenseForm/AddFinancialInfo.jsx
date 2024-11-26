import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setFinancialInfo } from "../../api/expenseApi";

const AddFinancialInfo = ({ isOpen, onClose, callback }) => {
  const [openModal, setOpenModal] = useState(isOpen);
  const [email, setEmail] = useState();

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
console.log("budget", data);
    try {
      const response = await setFinancialInfo(data);
      console.log(response)
      if (response) {
        callback(response.user)
        onClose(); 
      }
    } catch (error) {
      console.error("Failed to set budget:", error);
    } 
  };

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
            <form onSubmit ={ handleSubmit(onSubmit) }>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Financial Details Form</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="budget" value="Your budget" />
              </div>
              <TextInput
                id="budget"
                placeholder="Enter budget"
                type="number"
                {...register("budget", { required: "field is required" })}
                />
                {errors.budget && (
                  <span className="text-red-700 text-sm">
                    {errors.budget.message}
                  </span>
                )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="savingsGoal" value="Your budget" />
              </div>
              <TextInput
                id="savingsGoal"
                placeholder="Enter savings goal"
                type="number"
                {...register("savingsGoal", { required: "field is required" })}
                />
                {errors.savingsGoal && (
                  <span className="text-red-700 text-sm">
                    {errors.savingsGoal.message}
                  </span>
                )}
            </div>


            <div className="w-full">
              <Button type="submit">Submit</Button>
            </div>

          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddFinancialInfo;