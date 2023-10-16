import { useEffect, useState } from "react";
import ExpenseList, { Expense } from "./components/ExpenseList";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { format } from "date-fns";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if (!expenses && localStorage.getItem("storedExpenses")) {
      setExpenses(JSON.parse(localStorage.getItem("storedExpenses") as string));
    }
  }, []);

  return (
    <div>
      <h1 className="my-4 text-center">Expense Tracker App</h1>
      <ExpenseForm
        handleFormData={(data) => {
          setExpenses([
            ...expenses,
            {
              ...data,
              date: format(new Date(data.date), "MMM do, yyyy"),
              id: crypto.randomUUID(),
            },
          ]);
          localStorage.setItem("storedExpenses", JSON.stringify(expenses));
        }}
      />
      {expenses.length > 0 && (
        <ExpenseList
          expenses={expenses}
          handleDelete={(id) => {
            setExpenses([
              ...expenses.filter((expense) => {
                return expense.id !== id;
              }),
            ]);
            localStorage.setItem("storedExpenses", JSON.stringify(expenses));
          }}
        />
      )}
    </div>
  );
};

export default App;
