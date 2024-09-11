import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetOverview from "./BudgetOverview";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Personal Budget Tracker</h1>
      <BudgetOverview expenses={expenses} budget={budget} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Set Budget Limit"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
