 import type { Item } from '../types'
 import { Dispatch } from 'react'
 import { OrderActions } from '../reducers/order-reducer'
 type MenuItemProps = {
  item: Item,
  dispatch: Dispatch<OrderActions>
 }
export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button  onClick={() => dispatch({type:'add-item', payload: {item}})} className='w-full p-3 flex justify-between hover:bg-amber-100 border-2 border-amber-300'>
    <p>{item.name}</p>
    <p className='font-bold'>${item.price}</p>
    </button>
  )
}
