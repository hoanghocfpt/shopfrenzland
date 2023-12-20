"use client";
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

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

    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct) {
          setCart(
              cart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              )
          );
      } else {
          setCart([...cart, { ...product, quantity: 1, price: product.price }]);
      }
      
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cart.filter((item) => item.id !== productId);
    setCart(updatedCartItems);
  };
    
  const decreaseItem = (itemId) => {
    const existingProduct = cart.find((item) => item.id === itemId);
  
    if (existingProduct) {
      // Giảm số lượng sản phẩm xuống nếu sản phẩm đã có trong giỏ hàng và số lượng lớn hơn 1
      if (existingProduct.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    }
  };
  

  const increaseItem = (itemId) => {
      setCart(
          cart.map((item) =>
              item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          )
      );
  };

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
      <CartContext.Provider value={{ cart, addToCart, decreaseItem, increaseItem, removeFromCart, grandTotal}}>
          {children}
      </CartContext.Provider>
  );
};
