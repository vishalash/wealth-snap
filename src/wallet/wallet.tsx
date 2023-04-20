import { useSelector } from "react-redux";
import Image from 'next/image';
import { format } from 'date-fns';
import AddWalletForm from "./addWallet";
import AddExpenseForm from "./addExpense";
import { useState } from "react";

const Wallet = () => {
  const allWallets = useSelector((state: any) => state.wallet.wallets);
  const [showAddExpense, setAddExpense] = useState(false);
  const [walletToEdit, setWalletToEdit] = useState();
  const addExpenseHandler = (id: any) => {
    setWalletToEdit(id);
    setAddExpense(true);
  }
  const closeAddExpense = () => {
    setAddExpense(false);
  }

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {showAddExpense && <AddExpenseForm onClose={closeAddExpense} walletId={walletToEdit} />}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add a new wallet</h2>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              onClick={toggleForm}
            >
              {isFormOpen ? 'Close Form' : 'Open Form'}
            </button>
          </div>
          {isFormOpen && (
            <div className="border-t border-gray-200 mt-4 pt-4">
              <AddWalletForm closeForm={toggleForm} />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 md:px-12" style={{ backgroundColor: '#F4F9FF' }}>
        {allWallets.map((wallet: any) => (
          <div key={wallet.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center bg-gray-200 p-3">
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
                  return expense.type === 'debit' ? total - expense.amount : total + expense.amount;
                }, 0) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {wallet.expenses.reduce((total: any, expense: any) => {
                    return expense.type === 'debit' ? total - expense.amount : total + expense.amount;
                  }, 0)}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {wallet.expenses.map((expense: any) => (
                  <li
                    key={expense.id}
                    className="flex justify-between items-center text-gray-600"
                  >
                    <div className="flex items-center">
                      <span
                        className={`rounded-full bg-${expense.type === 'debit' ? 'red-500' : 'green-500'} h-4 w-4 mr-2`}
                      />
                      <span className="text-sm">{format(new Date(expense.date), 'MMM dd, yyyy')}</span>
                    </div>
                    <span className={`text-sm font-bold ${expense.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>{expense.type === 'debit' ? '-' : '+'}${expense.amount}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addExpenseHandler(wallet.id)}>
                Add Expense
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wallet;