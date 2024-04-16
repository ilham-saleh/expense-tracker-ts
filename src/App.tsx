// React, etc...
import { useState } from "react";

// CSS
import "./App.css";

import ExpenseList from "./components/ExpenseList.tsx";
import data from "./data.ts";
import ExpenseFilter from "./components/ExpenseFilter.tsx";

function App() {
  const [expenses, setExpenses] = useState(data);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseFilter />
      <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </div>
  );
}

export default App;
