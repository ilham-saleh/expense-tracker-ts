// React, etc...
import { useState } from "react";

// CSS
import "./App.css";

import ExpenseList from "./components/ExpenseList/ExpenseList.tsx";
import data from "./data.ts";

function App() {
  const [expenses, setExpenses] = useState(data);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </div>
  );
}

export default App;
