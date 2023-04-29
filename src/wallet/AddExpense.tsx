import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addExpense } from '../store/walletReducer';
import { format } from 'date-fns';

function AddExpenseForm({ walletId, onClose }: any) {
  const [expense, setExpense] = useState({ date: format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss'), amount: '', type: 'credit', note: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newExpense = { id: nanoid(), ...expense };
    dispatch(addExpense({ walletId, expense: newExpense }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white rounded-md w-full max-w-md mx-4 p-6">
        <h2 className="text-lg font-medium mb-4">Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block font-medium mb-1">
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={expense.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="type" className="block font-medium mb-1">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={expense.type}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            >
              <option value="">Select type</option>
              <option value="debit">Debit (Money Deducted)</option>
              <option value="credit">Credit (Money Added)</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block font-medium mb-1">
              Notes
            </label>
            <textarea className='border border-gray-300 rounded-md py-2 px-3 w-full'
            onChange={handleInputChange} name='note' id='note' value={expense.note}></textarea>
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

export default AddExpenseForm;
