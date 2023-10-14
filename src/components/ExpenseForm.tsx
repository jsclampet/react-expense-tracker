import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Expense } from "./ExpenseList";

type Inputs = {
  date: string;
  description: string;
  location: string;
  amount: string;
};
interface Props {
  handleFormData: Expense;
}

function ExpenseForm({ handleFormData }: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onFormSubmit: SubmitHandler<Inputs> = (d: FormEvent<HTMLElement>) =>
    console.log(d);

  return (
    <div>
      <form
        className="expense-form"
        onSubmit={(data) => {
          handleSubmit(onFormSubmit(data));
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
