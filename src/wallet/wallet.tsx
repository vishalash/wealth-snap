import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAllWallet } from "../store/walletReducer";
import AddWalletForm from "./AddWallet";
import WalletCard from "./WalletCard";

const Wallet = () => {
  const allWallets = useSelector((state: any) => state.wallet.wallets);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let exisitingWallets: any = localStorage.getItem('walletInfo');
      if (allWallets.length === 0 && exisitingWallets) {
        exisitingWallets = JSON.parse(exisitingWallets);
        if (exisitingWallets?.length > 0) {
          dispatch(addAllWallet(exisitingWallets));
        }
      }
    }
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('walletInfo', JSON.stringify(allWallets));
    }
  })

  let totalNetWorth = 0;
  allWallets.forEach((wallet: any) => {
    let totalSum = 0;
    totalSum += wallet.expenses.reduce((total: any, expense: any) => {
      return expense.type === 'debit' ? (total - +expense.amount) : (total + +expense.amount);
    }, 0);
    totalNetWorth += totalSum;
  });

  return (
    <>
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
      <div className="mt-4 ml-4 inline-flex items-center bg-green-500 text-white text-xl font-bold py-2 px-4 rounded-lg">
        Total Net Worth: ${totalNetWorth}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 md:px-12" style={{ backgroundColor: '#F4F9FF' }}>
        {allWallets.map((wallet: any) => (
          <WalletCard key={wallet.id} wallet={wallet} />
        ))}
      </div>
    </>
  )
}

export default Wallet;