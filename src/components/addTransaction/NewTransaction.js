import React, { useState } from "react";
import classes from "./styles/NewTransaction.module.css";
import TransactionForm from "./TransactionForm";


// This component opens a new transaction form

const NewTransaction = () => {
  const [isEditing, setIsEditing] = useState(false);

  const showFormHandler = () => {
    setIsEditing(true);
  };
  const closeFormHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={classes.newTransaction}>
      {isEditing ? (
        <TransactionForm onCloseForm={closeFormHandler} />
      ) : (
        <button onClick={showFormHandler}> Add New Transaction</button>
      )}
    </div>
  );
};

export default NewTransaction;
