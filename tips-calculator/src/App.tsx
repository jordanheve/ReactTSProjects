import { menuItems } from "./data/db"
import MenuItem from './components/MenuItem'
import {Item} from "./types/index"
import useOrder from "./hooks/useOrder"
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from "./components/TipPercentageForm"
function App() {

const {addItem, removeItem, order, tip, setTip, placeOrder} = useOrder()
  return (
    <>
     <header className="bg-red-500 text-white p-2">
      <h1 className="text-center text-4xl">Tips Calculator</h1>
     </header>

     <main className="max-w-7xl mx-auto  py-20 grid md:grid-cols-2">
      <section className="space-y-2 p-2">
        <h2 className="text-center text-4xl font-black">Menu</h2>
        {
          menuItems.map((item :Item) => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))
        }
      </section>
      <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {
          order.length > 0 ?
          (
            <>
            <OrderContents 
            removeItem={removeItem}
            order={order}
            />
            <TipPercentageForm
            setTip={setTip}
            tip={tip}
            />
            <OrderTotals
            order = {order}
            tip={tip}
            placeOrder={placeOrder}
            />
            </>) : (  <p className="text-center">
                La orden está vacía
            </p>)
        }


      </section>
     </main>  
    </>
  )
}

export default App
