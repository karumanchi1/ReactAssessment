import React, { useState,  } from "react";
import classes from './styles/NewTransaction.module.css';
import TransactionForm from "./TransactionForm";



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
      {!isEditing && (
        <button onClick={showFormHandler}> Add New Transaction</button>
      )}
      {isEditing && (
        <TransactionForm
          onCloseForm={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewTransaction;
