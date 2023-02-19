import classes from "./styles/TransactionList.module.css";
import TransactionItem from "./TransactionItem";

const TransactionList = (props) => {
  return (
    <ul className={classes.list}>
      {props.transactions.map((transaction) => (
        <TransactionItem
          transaction={transaction}
          key={transaction.key}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
