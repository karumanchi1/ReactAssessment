import { useState, useContext } from "react";
import TransactionContext from "../../store/transaction-context";
import classes from "./styles/TransactionForm.module.css";
import {func} from "prop-types";

//The Transaction Form Component is used to add new transactions to the dataset.

const TransactionForm = ({onCloseForm}) => {
  
  const [enteredId, setEnteredId] = useState("1");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const addTransaction = useContext(TransactionContext).addTransaction;

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const transactionData = {
      customerId: enteredId,
      name: "",
      amount: enteredAmount,
      transactionDate: enteredDate,
      key: enteredDate + Math.random(),
    };
    await addTransaction(transactionData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredId("");
    onCloseForm();
  };

  const transactionForm = (
    <form data-testid="transaction-form" onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="id">ID</label>
          <select id="id" name="id" onChange={idChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            required
            id="amount"
            type="number"
            value={enteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input
            required
            id="date"
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2022-03-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Transaction</button>
        </div>
        <div className={classes.actions}>
          <button onClick={onCloseForm}>Cancel</button>
        </div>
      </div>
    </form>
  );

  return transactionForm;
};

TransactionForm.propTypes = {
  onCloseForm: func.isRequired
};

export default TransactionForm;
