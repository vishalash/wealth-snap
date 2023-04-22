import { useState } from "react";
import { removeWallet } from "../store/walletReducer";
import { useDispatch } from "react-redux";
import Image from "next/image";
import AddExpenseForm from "./AddExpense";
import AddExpenseTotalForm from "./AddExpenseTotal";
import ExpenseCard from "./ExpenseCard";
import Expense from "../data-model/Expense";

const WalletCard = (props: any) => {
  const [walletToEdit, setWalletToEdit] = useState();
  const dispatch = useDispatch();
  const [showAddExpense, setAddExpense] = useState(false);
  const [showAddExpenseTotal, setAddExpenseTotal] = useState(false);
  const wallet = props.wallet;
  const closeAddExpense = () => {
    setAddExpense(false);
  }
  const closeAddExpenseTotal = () => {
    setAddExpenseTotal(false);
  }
  const addExpenseHandler = (id: any) => {
    setWalletToEdit(id);
    setAddExpense(true);
  }

  const addExpenseTotalHandler = (id: any) => {
    setWalletToEdit(id);
    setAddExpenseTotal(true);
  }
  const getWalletTotal = (wallet: any) => {
    let totalSum = 0;
    totalSum = wallet.expenses.reduce((total: any, expense: any) => {
      return expense.type === 'debit' ? (total - +expense.amount) : (total + +expense.amount);
    }, 0);
    return totalSum;
  }
  const deleteWalletHandler = (walletId: any) => {
    dispatch(removeWallet(walletId));
  }
  let expensesArray = wallet.expenses.slice(-5).reverse();
  return (
    <>
      {showAddExpense && <AddExpenseForm onClose={closeAddExpense} walletId={walletToEdit} />}
      {showAddExpenseTotal && <AddExpenseTotalForm onClose={closeAddExpenseTotal} walletId={walletToEdit} />}
      <div key={wallet.id} className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center bg-gray-200 p-3">
          <button title="Delete Wallet" className="mr-2 top-0 left-0 bg-red-500 hover:bg-red-700 rounded-full" onClick={() => deleteWalletHandler(wallet.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="rounded-full h-12 w-12 overflow-hidden">
            <Image
              src={wallet.logo}
              alt={wallet.name}
              width={64}
              height={64}
            />
          </div>
          <h2 className="ml-4 text-gray-800 text-xl font-semibold">{wallet.name}</h2>
        </div>
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600 mb-2">{wallet.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold text-gray-600">{wallet.type}</p>
            <p className={`text-lg font-bold ${wallet.expenses.reduce((total: any, expense: any) => {
              return expense.type === 'debit' ? total - +expense.amount : total + +expense.amount;
            }, 0) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {getWalletTotal(wallet)}</p>
          </div>
          <ul className="mt-4 space-y-2">
            {expensesArray.map((expense: Expense) => (
              <ExpenseCard key={expense.id} expense={expense} />
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addExpenseHandler(wallet.id)}>
            Add Expense
          </button>

          <button className="ml-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addExpenseTotalHandler(wallet.id)}>
            Add Current Total
          </button>
        </div>
      </div>
    </>
  )
}

export default WalletCard;