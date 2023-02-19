import React from "react";


const TransactionContext = React.createContext({
  transactions: [],
  addTransaction:async (transaction)=>{},
  isLoading:false,
  isLoadingHandler:()=>{},
}); ;

export default TransactionContext;
