
import { categories } from "../data/categories"
import { ChangeEvent, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense, Value } from "../types";
import { useBudget } from "../hooks/useBudget";
interface ExpenseFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ExpenseForm({setIsOpen}  : ExpenseFormProps ){
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })
  const {dispatch} = useBudget()

  const handleChangeDate = (value: Value) => {
    setExpense({ ...expense, date: value })
  }

  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isAmount = ['amount'].includes(name);
    const sanitizedValue = isAmount ? value.replace(/\D/g, '') : value;
    setExpense({ ...expense, [name]: isAmount ? +sanitizedValue : sanitizedValue });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(expense).includes('')){
      setError('All fields are required')
      return
    }
    setError('')
    dispatch({ type: "add-expense", payload: { expense } });
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-4">
        <legend className="uppercase text-center text-2xl font-bold border-b-4 border-blue-500 py-2 w-full">
          Add Expense
        </legend>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Expense Name
          </label>
          <input
            onChange={handleChange}
            value={expense.expenseName}
            type="text"
            id="expenseName"
            placeholder="Add expense name"
            className="bg-slate-100 p-2"
            name="expenseName"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xl">
            Amount
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={expense.amount === 0 ? '' : expense.amount}
            id="amount"
            placeholder="Add expense amount"
            className="bg-slate-100 p-2"
            name="amount"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xl">
            Category
          </label>

          <select
            onChange={handleChange}
            name="category"
            id="category"
            className="bg-slate-100 p-2"
            value={expense.category}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-xl">
            Date
          </label>
          <DatePicker
            value={expense.date}
            className="bg-slate-100 p-2"
            onChange={handleChangeDate}
          />
        </div>

        {error && (
          <div className="text-red-600 font-bold text-center">{error}</div>
        )}


        <input
          type="submit"
          className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg text-center"
          value="Add Expense"
        />
      </fieldset>
    </form>
  )
}
