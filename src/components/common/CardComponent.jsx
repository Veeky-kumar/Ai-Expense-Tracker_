import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <Card href="#" className="max-w-sm min-w-64  ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Expenses
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        30,000
      </p>
    </Card>
  );
}
