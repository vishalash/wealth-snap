import { format } from "date-fns"
import Expense from "../data-model/Expense";

type Prop = {
  expense: Expense
}

const ExpenseCard: React.FC<Prop> = ({ expense }) => {
  return (
    <li
      key={expense.id}
      className="flex justify-between items-center text-gray-600"
    >
      <div className="flex items-center">
        <span
          className={`rounded-full bg-${expense.type === 'debit' ? 'red-500' : 'green-500'} h-4 w-4 mr-2`}
        />
        <span className="text-sm">{format(new Date(expense.date), 'PPp')}</span>
      </div>
      <span className={`text-sm font-bold ${expense.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>{expense.type === 'debit' ? '-' : '+'}${expense.amount}</span>
    </li>
  )
}

export default ExpenseCard;