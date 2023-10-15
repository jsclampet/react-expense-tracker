export interface Expense {
  date: string;
  description: string;
  location: string;
  amount: number;
  id: string;
}

interface Props {
  expenses: Expense[];
  handleDelete: (expense: string) => void;
}

function ExpenseList({ expenses, handleDelete }: Props) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr className="table-info">
            <th>Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td>{expense.amount}</td>
                <td width="40px">
                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="table-info">
            <td colSpan={3} className="table-footer-left">
              <strong>Total:</strong>
            </td>
            <td colSpan={2}>
              <strong>
                {expenses.reduce((acc, expense) => acc + expense.amount, 0)}
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseList;
