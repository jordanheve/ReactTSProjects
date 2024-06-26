import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from "../types";

export type BudgetActions = 
    { type: 'add-budget'; payload: { budget: number } } |
    {type: 'add-expense'; payload: { expense: DraftExpense } } ;

export type BudgetState = {
    budget: number
    expenses : Expense[]
};

export const initialState: BudgetState = { 
    budget: 0,
    expenses: [],
    };

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions,
    
): BudgetState => {
    switch (action.type) {
        case 'add-budget':
            return {
                ...state,
                budget: action.payload.budget !== null ? action.payload.budget : state.budget,
            };

        case 'add-expense': {
            const expense: Expense = {
                id: uuidv4(),
                ...action.payload.expense,
            };
            return {
                ...state,
                expenses: [...state.expenses, expense],
            };
        }

        default:
            return state;
    }
};
