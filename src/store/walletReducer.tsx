import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  wallets: [
    {
      id: '1',
      type: 'cash',
      name: 'My Cash Wallet',
      logo: '/assets/images/wallet-logo.png',
      description: 'Cash in my actual wallet',
      expenses: [
        {
          id: '1',
          date: '2023-04-19',
          amount: 0,
          type: 'credit'
        },
      ]
    }
  ],
};


const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addWallet(state, action) {
      const newWallet = action.payload;
      newWallet.id = nanoid();
      newWallet.expenses = [];
      state.wallets.push(newWallet);
    },
    removeWallet(state, action) {
      const walletId = action.payload;
      state.wallets = state.wallets.filter((wallet) => wallet.id !== walletId);
    },
    addExpense(state, action) {
      const { walletId, expense } = action.payload;
      const wallet = state.wallets.find((wallet) => wallet.id === walletId);
      if (wallet) {
        wallet.expenses.push(expense);
      }
    },
    removeExpense(state, action) {
      const { walletId, expenseId } = action.payload;
      const wallet = state.wallets.find((wallet) => wallet.id === walletId);
      if (wallet) {
        wallet.expenses = wallet.expenses.filter((expense) => expense.id !== expenseId);
      }
    },
  },
});

export const { addWallet, removeWallet, addExpense, removeExpense } = walletSlice.actions;
export default walletSlice.reducer;
