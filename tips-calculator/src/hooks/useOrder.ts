// no longer needed, this is a diferen way to handle the order state
import { useState } from "react"
import type { OrderItem, Item } from '../types'
export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState<number>(0);
    const addItem = (item:Item) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: Item['id']) => {
        setOrder(prevOrder => prevOrder.filter(item => item.id!== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,
    }
}