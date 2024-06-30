import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from "../types";

export type BudgetActions = 
    { type: 'add-budget'; payload: { budget: number } } |
    {type: 'add-expense'; payload: { expense: DraftExpense } } |
    { type: 'remove-expense', payload: { id: Expense['id'] } } |
    { type: 'open-modal'} |
    { type: 'close-modal'} |
    {type: 'get-expense-by-id', payload: { id: Expense['id'] } }

export type BudgetState = {
    budget: number
    expenses : Expense[],
    modalOpen: boolean,
    editinId : Expense['id']
};

export const initialState: BudgetState = { 
    budget: 0,
    expenses: [],
    modalOpen: false,
    editinId: '',
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
                modalOpen: false,
                expenses: [...state.expenses, expense],
            };
        }
        case 'remove-expense':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload.id),
            };

        case "get-expense-by-id":
            return {
               ...state,
                editinId: action.payload.id,
                modalOpen:true,
            };

        case 'open-modal':
            return {
                ...state,
                modalOpen: true,
            };
        case 'close-modal':
            return {
                ...state,
                modalOpen: false,
            };

        default:
            return state;
    }
};
