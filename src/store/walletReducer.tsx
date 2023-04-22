import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  wallets: [],
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addWallet(state: any, action) {
      const newWallet = action.payload;
      newWallet.id = nanoid();
      newWallet.expenses = [];
      state.wallets.push(newWallet);
    },
    removeWallet(state: any, action) {
      const walletId = action.payload;
      state.wallets = state.wallets.filter((wallet: any) => wallet.id !== walletId);
    },
    removeAllWallet(state: any) {
      state.wallets = [];
    },
    addAllWallet(state: any, action) {
      const allWallets = action.payload;
      state.wallets = allWallets;
    },
    addExpense(state: any, action) {
      const { walletId, expense } = action.payload;
      const wallet = state.wallets.find((wallet: any) => wallet.id === walletId);
      if (wallet) {
        wallet.expenses.push(expense);
      }
    },
    removeExpense(state: any, action) {
      const { walletId, expenseId } = action.payload;
      const wallet = state.wallets.find((wallet: any) => wallet.id === walletId);
      if (wallet) {
        wallet.expenses = wallet.expenses.filter((expense: any) => expense.id !== expenseId);
      }
    },
    addCurrentValue(state: any, action) {
      const { walletId, amount } = action.payload;
      let expense = {
        id: nanoid(), type: 'debit', date: format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss'), amount: 0
      };
      const wallet = state.wallets.find((wallet: any) => wallet.id === walletId);
      if (wallet) {
        const totalAmount = wallet.expenses.reduce((total: any, expense: any) => {
          return expense.type === 'debit' ? (total - +expense.amount) : (total + +expense.amount);
        }, 0);
        if (amount && amount > totalAmount) {
          expense.type = 'credit';
          expense.amount = amount - totalAmount;
        } else {
          expense.amount = totalAmount - amount;
        }
        wallet.expenses.push(expense);
      }
    }
  },
});

export const { addWallet, removeWallet, removeAllWallet, addAllWallet, addExpense, removeExpense, addCurrentValue } = walletSlice.actions;
export default walletSlice.reducer;
