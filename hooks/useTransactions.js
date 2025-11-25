import { useState , useCallback } from 'react'
import { Alert } from 'react-native'

const API_URL = "https://backend-wallet-18tf.onrender.com/api"

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();

      // Clean and convert data
      const cleaned = data.map(t => ({
        ...t,
        amount: Number(t.amount),            // Fix NaN
        created_at: new Date(t.created_at),  // Fix Invalid Date
      }));

      setTransactions(cleaned);
    } catch (err) {
      console.error("Error fetching transactions: ", err);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (err) {
      console.error("Error fetching Summary: ", err);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;

    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (err) {
      console.error("Error loading data: ", err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, userId]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error("Failed to delete transactions");
      }
      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (err) {
      console.error("Error deleting transaction: ", err);
      Alert.alert("Error", err.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
};
