 import type { Item } from '../types'
 type MenuItemProps = {
  item: Item,
  addItem: (item: Item) => void,
 }
export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button  onClick={() => addItem(item)} className='w-full p-3 flex justify-between hover:bg-amber-100 border-2 border-amber-300'>
    <p>{item.name}</p>
    <p className='font-bold'>${item.price}</p>
    </button>
  )
}
