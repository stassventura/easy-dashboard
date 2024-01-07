import { useEffect, useState } from 'react';
import { generateTransaction } from '../lib/helpers';
interface Transaction {
  hash: string;
  amountInCrypto: number;
  currency: string;
  dollarAmount: string;
  hashIcon: string;
  icon: string;
  timestamp: string;
}

export default function useTransactions() {
  const initialTransactions = Array.from({ length: 3 }, generateTransaction);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  useEffect(() => {
    const addTransaction = () => {
      setTransactions((currentTransactions) => {
        const newTransaction = generateTransaction();
        return [newTransaction, ...currentTransactions];
      });
    };
    (function loop() {
      const delay = Math.round(Math.random() * (8000 - 3000)) + 3000;
      setTimeout(() => {
        addTransaction();
        loop();
      }, delay);
    })();
  }, []);

  return transactions;
}
