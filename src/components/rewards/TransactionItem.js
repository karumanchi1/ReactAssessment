import React from "react";
import Card from "../ui/Card";
import classes from "./styles/TransactionItem.module.css";
import useRewards from "../../hooks/useRewards";

function TransactionItem(props) {
  const rewardPoints = useRewards([props.transaction]);

  return (
    <li>
      <Card className={classes.item}>
        <h1 className={classes.rewards}>{props.transaction.transactionDate}</h1>
        <div className={classes.amount}>
          <h2>Amount Spent: ${props.transaction.amount}</h2>
          <div className={classes.rewards}>Rewards: <br/>{rewardPoints}</div>
        </div>
      </Card>
    </li>
  );
}

export default TransactionItem;
