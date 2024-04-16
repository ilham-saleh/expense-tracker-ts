import { FormEvent, useState } from "react";
import { categories } from "../App";

// interface FormData {
//   description: string;
//   amount: number;
//   category: string;
// }

// interface Props {
//   onFormSubmit: (FormData: {}) => void;
// }

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    category: "",
  });

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Pass form data to the parent component
  };

  console.log(formData);
  return (
    <div className="mb-3">
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="description"
            name="description"
            type="text"
            className="form-control"
            value={formData.description}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="amount"
            type="number"
            name="amount"
            className="form-control"
            value={formData.amount}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            onChange={(e) => handleChange(e)}
            name="category"
            id="category"
            className="form-select"
            value={formData.category}
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary mb-5">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
