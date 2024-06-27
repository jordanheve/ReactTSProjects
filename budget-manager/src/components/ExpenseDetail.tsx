import { categories } from '../data/categories'
import { formatDate } from '../helpers'
import {Expense } from '../types'
import AmountDisplay from './AmountDisplay'
import { useMemo } from 'react'
type ExpenseDetailProps = {
    expense : Expense
}
export default function ExpenseDetail({expense}: ExpenseDetailProps ) {
    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0],[expense])
  return (
    <div className='bg-white shadow-lg p-10 w-full border-b border-gray-200 flex justify-between'>
        <div className='flex gap-4'>
            <div >
                
                <img src={`/icon_${categoryInfo.icon}.svg`} alt='icon spent' className='w-12 h-12'/>
            </div>
            <div>
                <p>{expense.expenseName}</p>
                <p className='text-slate-600 text-sm'>{formatDate(expense.date!.toString())}</p>
            </div>
        </div>
        <AmountDisplay amount={expense.amount} label='Spent'/>
    </div>
  )
}
