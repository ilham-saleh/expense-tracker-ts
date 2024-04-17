import React, { useState, FormEvent } from "react";
import { categories } from "../App";
import { Expense } from "../props";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: Expense) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    amount: 0,
    category: "",
  });

  const [errors, setErrors] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Reset error messages
    setErrors({
      description: "",
      amount: "",
      category: "",
    });

    // Validation checks
    let isValid = true;

    if (formData.description.trim().length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Description must be at least 3 characters long.",
      }));
      isValid = false;
    }

    if (formData.amount <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: "Amount must be greater than 0.",
      }));
      isValid = false;
    }

    if (formData.category.trim().length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: "Please select a category.",
      }));
      isValid = false;
    }

    if (isValid) {
      // Generate a unique id for the new expense
      const id = new Date().getTime();

      // Pass the new expense data to the parent component
      onSubmit({ id, ...formData });

      // Reset the form data state to its initial values
      setFormData({
        description: "",
        amount: 0,
        category: "",
      });
    }
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
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
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
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
          {errors.amount && <div className="text-danger">{errors.amount}</div>}
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
          {errors.category && (
            <div className="text-danger">{errors.category}</div>
          )}
        </div>

        <button className="btn btn-primary mb-5">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
