import { menuItems } from "./data/db"
import MenuItem from './components/MenuItem'
import {Item} from "./types/index"
import useOrder from "./hooks/useOrder"
function App() {

const {addItem} = useOrder()
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
      <section>
        <h2 className="text-center text-2xl">Consume</h2>
      </section>
     </main>  
    </>
  )
}

export default App
