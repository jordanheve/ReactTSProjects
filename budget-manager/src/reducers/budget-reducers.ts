export type BudgetActions = 
    { type: 'add-budget'; payload: { budget: number | null } };

export type BudgetState = {
    budget: number;
};

export const initialState: BudgetState = { budget: 0 };

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
): BudgetState => {
    switch (action.type) {
        case 'add-budget':
            return {
                ...state,
                budget: action.payload.budget !== null ? action.payload.budget : state.budget,
            };
        default:
            return state;
    }
};
