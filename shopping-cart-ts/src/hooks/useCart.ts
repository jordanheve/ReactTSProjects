import { useState, useEffect, useMemo } from "react";
import {db} from '../data/db';
function useCart(){
      // The initialCart function is a helper function that retrieves the cart from local storage.
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
      }
    
      const [data] = useState(db);
      const [cart, setCart] = useState(initialCart);
    
      /*
      * When dealing with persistent elements, it's recommended to declare constants at the top of the file.
      * This practice facilitates easier manipulation and contributes to cleaner code.
      * 
      * MAX the maximum and minimun quantity of guitars that can be added to the cart
      * MIN the minimum and maximun quantity of guitars that can be in the cart, if the user wants to remove more then will have to remove the item from the cart
      */
      const MAX_QUANTITY = 10;
      const MIN_QUANTITY = 1;
    
      
    /* The `useEffect` hook in React is used to perform side effects in function components. In this case,
    there are two `useEffect` hooks in the `App` component:  */
    
    // The first `useEffect` hook is used to save the cart to local storage whenever the cart state changes.
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
      // The second `useEffect` hook is used to retrieve the cart from local storage once website is loaded.
      useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart) setCart(cart);
      }, []);
    
    /**
     * Function to add a guitar to the cart.
     * If the guitar already exists in the cart, increase its quantity by 1.
     * If the guitar does not exist in the cart, add it with a quantity of 1.
     * If the quantity of the guitar in the cart reaches the maximum limit, do not add more.
     * @param {Object} guitar - The guitar object to be added to the cart.
     * @param {number} guitar.id - The unique identifier of the guitar.
     * @param {string} guitar.name - The name of the guitar.
     * @param {number} guitar.price - The price of the guitar.
     * @param {string} guitar.image - The image URL of the guitar.
     * @returns {void}
     */
    function addToCart(guitar) {
      const itemsExists = cart.findIndex(item => item.id === guitar.id);
      if(itemsExists >= 0) {
        if(cart[itemsExists].quantity >= MAX_QUANTITY) return;
        const newCart = [...cart];
        newCart[itemsExists].quantity++;
        setCart(newCart);
      } else {    
        setCart([...cart, {...guitar, quantity: 1 }]);
      } 
    }
    
    /**
     * Function to remove a guitar from the cart.
     * @param {number} id - The unique identifier of the guitar to be removed.
     * @returns {void}
     */
    function removeFromCart(id) {
      setCart(prevCart => prevCart.filter(item => item.id!== id));
    }
    
    /**
     * Function to increment the quantity of a guitar in the cart.
     * If the quantity reaches the maximum limit, do not increment.
     * @param {number} id - The unique identifier of the guitar to be incremented.
     * @returns {void}
     */
    function increment(id) {
      const updatedCart = cart.map(item => {
        if(item.id === id && item.quantity < MAX_QUANTITY) {
          return {
           ...item, quantity: item.quantity + 1
          }
        }
        return item;
      })
      setCart(updatedCart);
    }
    
    /**
     * Function to decrement the quantity of a guitar in the cart.
     * If the quantity reaches the minimum limit, do not decrement.
     * @param {number} id - The unique identifier of the guitar to be decremented.
     * @returns {void}
     */
    function decrement(id) {
      const updatedCart = cart.map(item => {
        if(item.id === id && item.quantity > MIN_QUANTITY) {
          return {
           ...item, quantity: item.quantity - 1
          }
        }
        return item;
      })
      setCart(updatedCart);
    }
    
    /**
     * Function to clear the cart.
     * @returns {void}
     */
    function clearCart () {
      setCart([]);
    }
    const isEmpty = useMemo( () => cart.length === 0, [cart]);
    const cartTotal = useMemo(  () => cart.reduce((total, item) => total + item.price * item.quantity, 0),[cart]); 

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart,
        isEmpty,
        cartTotal,
    }
}


export default useCart;