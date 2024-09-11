function BudgetOverview({ expenses, budget }) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const isOverBudget = total > budget;
  
    return (
      <div className="mb-4">
        <h3>Budget Overview</h3>
        <p>Total Spent: ${total.toFixed(2)}</p>
        <p>Budget Limit: ${budget.toFixed(2)}</p>
        <p>Status: {isOverBudget ? "Over Budget" : "Within Budget"}</p>
      </div>
    );
  }
  
  export default BudgetOverview;
  