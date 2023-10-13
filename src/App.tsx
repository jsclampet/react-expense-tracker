import React, { useState } from "react";
import Expenses from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState({});

  return (
    <div>
      <Expenses />
    </div>
  );
};

export default App;
