import React from "react";
import Card from "../ui/Card";
import classes from "./styles/TransactionItem.module.css";
import useRewards from "../../hooks/useRewards";


//This component is used to display each transaction item made by a customer 
 const TransactionItem = ({transaction}) => {
  const rewardPoints = useRewards([transaction]);

  return (
    <li>
      <Card className={classes.item}>
        <h1 className={classes.rewards}>{transaction.transactionDate}</h1>
        <div className={classes.amount}>
          <h2>Amount Spent: ${transaction.amount}</h2>
          <div className={classes.rewards}>Rewards: <br/>{rewardPoints}</div>
        </div>
      </Card>
    </li>
  );
}

export default TransactionItem;
