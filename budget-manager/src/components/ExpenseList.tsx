
import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"
export default function ExpenseList() {

    const {state} = useBudget()
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
  return (
    <div>
        {isEmpty ? 
        <p className="text-center text-2xl text-gray-400">No expenses</p> :    
        <>
            <p className="text-gray-600 text-2xl font-bold">
                Expenses list
            </p>
            {state.expenses.map((expense) => (
               <ExpenseDetail key={expense.id} 
                expense={expense}
               />
            ))}
        </>
        }

    </div>
  )
}
