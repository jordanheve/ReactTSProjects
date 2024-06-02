import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: number) => void
}
export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">
            Consumo
        </h2>
        <div className="space-y-3 mt-5">
            {order.length === 0 ?
            <p className="text-center">
                La orden está vacía
            </p>
            : (
                order.map((item) => (
                    <div key={item.id} className="relative border border-dashed border-slate-300 p-4 py-5">
                        <p>
                            {item.name} - {formatCurrency(item.price)} 
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                        <button 
                        onClick={() => removeItem(item.id)}
                        className="bg-red-400 h-5 w-5 rounded-full text-white text-xs font-bold absolute top-1 right-1 flex items-center justify-center">
                            <span className="mt-[-3px]">x</span>
                        </button>
                    </div>
                    
                ))
            )
             
                
        }
        </div>
    </div>
  )
}
