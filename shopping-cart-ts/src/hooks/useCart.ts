import { useState, useEffect, } from "react";
import type {  CartItem, GuitarID } from '../types';
function useCart(){
      // The initialCart function is a helper function that retrieves the cart from local storage.
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
      }
    
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
    
    
    
    /**
     * Function to remove a guitar from the cart.
     * @param {number} id - The unique identifier of the guitar to be removed.
     * @returns {void}
     */

    /**
     * Function to increment the quantity of a guitar in the cart.
     * If the quantity reaches the maximum limit, do not increment.
     * @param {number} id - The unique identifier of the guitar to be incremented.
     * @returns {void}
     */
    function increment(id : GuitarID) : void {
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
    function decrement(id :GuitarID):void  {
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
    function clearCart ():void {
      setCart([]);
    }

    return {
        cart,
        increment,
        decrement,
        clearCart,
    }
}


export default useCart;