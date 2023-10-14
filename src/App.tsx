import React, { useState } from "react";
import ExpenseList, { Expense } from "./components/ExpenseList";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      date: new Date().toDateString(),
      description: "Fast food",
      location: "Taco Bell",
      amount: 54,
      id: crypto.randomUUID(),
    },
    {
      date: new Date().toDateString(),
      description: "Fast food",
      location: "McDonalds",
      amount: 23,
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <div>
      <ExpenseForm />
      {expenses.length > 0 && (
        <ExpenseList
          expenses={expenses}
          handleDelete={(id) => {
            setExpenses([
              ...expenses.filter((expense) => {
                return expense.id !== id;
              }),
            ]);
          }}
        />
      )}
    </div>
  );
};

export default App;
