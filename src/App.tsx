// React, etc...
import { useState } from "react";

// CSS
import "./App.css";

import ExpenseList from "./components/ExpenseList.tsx";
import data from "./data.ts";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";
import { Expense } from "./props.ts";

export const categories = ["Utilities", "Entertainment", "Grocery"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>(data);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredList = expenses.filter((expense) =>
    selectedCategory ? expense.category === selectedCategory : expenses
  );

  const handleOnSubmit = (formData: Expense) => {
    const newExpense: Expense = {
      ...formData,
    };

    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="px-5 mt-3">
      <ExpenseForm onSubmit={handleOnSubmit} />
      <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      <ExpenseList
        expenses={filteredList}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
}

export default App;
