import classes from "./styles/TransactionList.module.css";
import TransactionItem from "./TransactionItem";


const TransactionList = ({transactions}) => {
  return (
    <ul className={classes.list}>
      {transactions.map((transaction) => (
        <TransactionItem
          transaction={transaction}
          key={transaction.key}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
