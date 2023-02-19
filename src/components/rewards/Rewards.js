import classes from "./styles/Rewards.module.css";
import Card from "../ui/Card";
import IDFilter from "./IDFilter";
import TransactionList from "./TransactionList";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../store/transaction-context";
import useRewards from "../../hooks/useRewards";

function Rewards() {
  const [filteredId, setFilteredIt] = useState("1");
  const [isloading, setisLoading] = useState(false);
  const transactionCtx = useContext(TransactionContext);
  const transactions = transactionCtx.transactions;
  const selectedIdTransactions = transactions.filter(
    (transaction) => transaction.customerId == filteredId
  );
  const rewardPoints = useRewards(selectedIdTransactions);

  const name = selectedIdTransactions.find((a) => a.name != "").name;

  const filterChangeHandler = async (selectedId) => {
    setisLoading(true);
    setFilteredIt(selectedId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setisLoading(false);
  };

  useEffect(() => {
    filterChangeHandler(filteredId);
  }, [filteredId]);

  return (
    <div>
      <Card className={classes.rewards} >
        <IDFilter selected={filteredId} onfilterChange={filterChangeHandler} />
        {isloading ? (
          <p>Requesting Reward Points of {name}...</p>
        ) : (
          <h3>
            Total Reward Points Earned By {name} : {rewardPoints}
          </h3>
        )}
        {!isloading && (
          <TransactionList transactions={selectedIdTransactions} />
        )}
      </Card>
    </div>
  );
}
export default Rewards;
