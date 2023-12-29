"use client";
import { createContext, useState, useEffect } from 'react';

export const AccountContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [grandTotal, setTotalCart] = useState(0);

    useEffect(() => {
        const localCart = localStorage.getItem('cartItem');
        if (localCart) {
            setCart(JSON.parse(localCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cart));
    }, [cart]);

    

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
        const quantity = Number(item.quantity);
        const price = Number(item.price);
        console.log(quantity, price);
        if (!isNaN(quantity) && !isNaN(price)) {
            total += quantity * price;
        }
    });
    setTotalCart(total);
  
}, [cart]);


  return (
      <AccountContext.Provider value={{ cart, addToCart, decreaseItem, increaseItem, removeFromCart, grandTotal}}>
          {children}
      </AccountContext.Provider>
  );
};
