import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createExpense } from "../../api/expenseApi";

const ExpenseForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const category = ["Utilities", "Entertainment", "Food", "Transportation"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Disable button while submitting
    try {
      const response = await createExpense(data);
      if (response) {
        // Successfully created
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error("Failed to create expense:", error);
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Expenses
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Expense Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Expense Name"
                type="text"
                {...register("name", { required: "Expense name is required" })}
              />
              {errors.name && (
                <span className="text-red-700 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Categories" />
              </div>
              <Select
                id="category"
                {...register("category", {
                  required: "Please select a category",
                })}
              >
                <option value="">Select category</option>
                {category.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              {errors.category && (
                <span className="text-red-700 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Amount" />
              </div>
              <TextInput
                id="amount"
                placeholder="Expense Amount"
                type="number"
                {...register("amount", {
                  required: "Amount is required",
                  valueAsNumber: true,
                })}
              />
              {errors.amount && (
                <span className="text-red-700 text-sm">
                  {errors.amount.message}
                </span>
              )}
            </div>

            <div className="flex justify-center pt-2">
              <Button
                gradientDuoTone="purpleToPink"
                size="md"
                className="w-[100px]"
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? "Submitting..." : "Add"}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExpenseForm;
