import { useState, useEffect } from "react";
import transactionsData from "../store/transaction-context";

const useRewards = (transactions) => {

  let points =0;
  transactions.forEach(transaction => {
    const amount=transaction.amount;
    if(amount>50){
      amount>100 ? points+=(50 + 2*(amount-100)) :points+=amount-50;
    }
  });
  return points;
}
export default useRewards;
