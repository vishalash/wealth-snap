import { format } from "date-fns"
import Expense from "../data-model/Expense";

type DeleteExpenseHandler = (id: string, walletId: string) => void;

type Prop = {
  expense: Expense,
  walletId: any,
  deleteExpenseHandler: DeleteExpenseHandler;
}

const ExpenseCard: React.FC<Prop> = ({ expense, deleteExpenseHandler, walletId }) => {
  const deleteExpense = () => {
    deleteExpenseHandler(walletId, expense.id);
  }
  return (
    <>
      <li
        key={expense.id}
        className="flex justify-between items-center text-gray-600">
        <div className="flex items-center">
          <span className={`rounded-e-full bg-${expense.type === 'debit' ? 'red-500' : 'green-500'} h-2 w-4 mr-2`} />
          <span className="text-sm">{format(new Date(expense.date), 'PPp')}</span>
        </div>
        <span className="truncate w-12" title={expense.note}>
          {expense.note}
        </span>
        <span className={`text-sm font-bold ${expense.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
          {expense.type === 'debit' ? '-' : '+'}{expense.amount}
        </span>
        <button className="ml-2 text-red-500 hover:text-red-700" onClick={deleteExpense} title="Delete Expense">
          &#10060;
        </button>
      </li>
      <hr />
    </>
  )
}

export default ExpenseCard;