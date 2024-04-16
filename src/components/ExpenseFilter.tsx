import { categories } from "../App";

interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
