import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentValue } from '../store/walletReducer';

function AddExpenseTotalForm({ walletId, onClose }: any) {
  const [expense, setExpense] = useState({ amount: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addCurrentValue({ walletId, amount: expense.amount }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white rounded-md w-full max-w-md mx-4 p-6">
        <h2 className="text-lg font-medium mb-4">Enter current total amount in this wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="1"
              value={expense.amount}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseTotalForm;
