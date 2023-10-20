import { useForm } from "react-hook-form";

type Inputs = {
  date: string;
  description: string;
  location: string;
  amount: number;
};
interface Props {
  handleFormData: (formData: Inputs) => void;
}

function ExpenseForm({ handleFormData }: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  return (
    <div>
      <form
        className="expense-form"
        onSubmit={handleSubmit((data) => {
          handleFormData(data);
          reset();
        })}
      >
        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="form-control bg-secondary text-light"
            {...register("date", { required: true, valueAsDate: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="form-control bg-secondary text-light"
            {...register("description", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="form-control bg-secondary text-light"
            {...register("location", { required: true })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-control bg-secondary text-light"
            step="any"
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </div>
        <div className="break"></div>
        <button className="btn btn-success btn-lg submit-btn" type="submit">
          Add Expense!
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
