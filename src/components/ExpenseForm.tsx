import { FormEvent } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onSubmit: (d: FormEvent<HTMLElement>) => SubmitHandler<FieldValues>;
}

function ExpenseForm({ onSubmit }: Props) {
  const { register, handleSubmit, reset } =
    useForm<SubmitHandler<FieldValues>>();

  return (
    <div>
      <form
        className="expense-form"
        onSubmit={(data) => {
          handleSubmit(onSubmit(data));
          reset();
        }}
      >
        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            {...register("date")}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            {...register("description")}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            {...register("location")}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="form-control"
            {...register("amount")}
          />
        </div>
        <div className="break"></div>
        <button className="btn btn-primary submit-btn" type="submit">
          Add Expense!
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
