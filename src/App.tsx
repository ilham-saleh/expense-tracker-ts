// React, etc...
import { useState } from "react";

// CSS
import "./App.css";

import ExpenseList from "./components/ExpenseList.tsx";
import data from "./data.ts";
import ExpenseFilter from "./components/ExpenseFilter.tsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(data);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredList = expenses.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : expenses
  );
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
        <ExpenseList
          expenses={filteredList}
          onDelete={(id) => handleDelete(id)}
        />
      </div>
    </div>
  );
}

export default App;
