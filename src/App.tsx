// React, etc...
import { useState } from "react";

// CSS
import "./App.css";

import ExpenseList from "./components/ExpenseList/ExpenseList.tsx";
import data from "./data.ts";

function App() {
  const [expenses, setExpenses] = useState(data);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={() => console.log("deleted")}
      />
    </div>
  );
}

export default App;
