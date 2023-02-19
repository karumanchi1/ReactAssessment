import { useState } from "react";
import TransactionContext from "./transaction-context";
import sampleTransactions from "./sample-transactions";


const TransactionProvider=(props)=>{
const [isLoading, setIsLoading] = useState(false);
const [transactions, setTransactions] = useState(sampleTransactions);


    const addTransactionHandler= async (newTransaction)=>{
     isLoadingHandler(true);
     await new Promise((resolve) => setTimeout(resolve, 1000));
     setTransactions((transactions) => [...transactions,newTransaction]);
     isLoadingHandler(false);
    }
    

    const isLoadingHandler =(t)=>setIsLoading(t);

 const transactionContext = {
   transactions,
   addTransaction: addTransactionHandler,
   isLoading,
   isLoadingHandler,
 };

 return <TransactionContext.Provider value={transactionContext}>
  {props.children}
 </TransactionContext.Provider>
}

export default TransactionProvider;