import { useContext } from "react";
import TransactionContext from "../store/transaction-context";
import NewTransaction from "../components/addTransaction/NewTransaction";
import Header from "../components/ui/Header";
import Rewards from "../components/rewards/Rewards";


const Home = () => {
  const transCtx = useContext(TransactionContext);
  const isLoading = transCtx.isLoading;

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <NewTransaction />
          <Rewards />
        </>
      )}
    </>
  );
};

export default Home;
