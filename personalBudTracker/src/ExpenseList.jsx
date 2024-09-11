function ExpenseList({ expenses, deleteExpense }) {
    return (
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {expense.description} - ${expense.amount.toFixed(2)} ({expense.category})
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteExpense(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ExpenseList;
  