interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Grocery">Grocery</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
