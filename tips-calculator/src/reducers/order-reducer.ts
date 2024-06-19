import type { Item, OrderItem } from '../types'

export type OrderActions = 
    {type: 'add-item', payload: {item: Item}} |
    {type: 'remove-item', payload: {id: Item['id']}} |
    {type: 'place-order'} |
    {type: 'add-tip', payload: {tip: number}} 

export type OrderState = {
    order: OrderItem[],
    tip: number,
}

export const initialState : OrderState = {
    order: [],
    tip: 0,
}

export const orderReducer = (state: OrderState, action: OrderActions) => {
    
    if (action.type === 'add-item') {
        const itemExists = state.order.find(item => item.id === action.payload.item.id);
        let updatedOrder : OrderItem[] = [];
        if (itemExists) {
            //updatedOrder = state.order.map(item => item.id === action.payload.item.id ? {...item, quantity: item.quantity + 1} : {...item });
            updatedOrder = state.order.map(item => item.id === action.payload.item.id ? 
                {...item, quantity: item.quantity + 1} : {...item }
            );
        } else {
           const newItem : OrderItem = { ...action.payload.item, quantity: 1 };
           updatedOrder = [...state.order, newItem];
        }
        return {...state, order: updatedOrder};
    } 
    
    if (action.type === 'remove-item') {
        const order = state.order.filter(item => item.id !== action.payload.id);
        return {...state, order};
    } 
    
    if (action.type === 'place-order') {
        return { ...state, order: [], tip: 0};
    }

    if (action.type === 'add-tip') {
        const tip = action.payload.tip;
        return { ...state, tip };
    }
        return state;
}
