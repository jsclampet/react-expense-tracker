function Expenses() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="table-primary">
            <th>Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Expenses;
