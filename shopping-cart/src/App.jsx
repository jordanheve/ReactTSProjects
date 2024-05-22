import { useState } from 'react';
import Header from './components/Header';
import Guitar from './components/Guitar';
import {db} from './data/db';
function App() {
 
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);
  function addToCart(guitar) {
    const itemsExists = cart.findIndex(item => item.id === guitar.id);
    if(itemsExists >= 0) {
      const newCart = [...cart];
      newCart[itemsExists].quantity++;
      setCart(newCart);
    } else {    
      setCart([...cart, { ...guitar, quantity: 1 }]);
    } 
  }

  return (
    <>
    <Header
      cart={cart}
      
    />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
        {data.map((guitar)=>(
          <Guitar
          guitar={guitar}
          key={guitar.id}
          addToCart={addToCart}
          />
        ))}

        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
