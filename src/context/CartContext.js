"use client";
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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
          // Tăng số lượng sản phẩm lên nếu sản phẩm đã có trong giỏ hàng
          setCart(
              cart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              )
          );
      } else {
          // Thêm sản phẩm vào giỏ hàng với số lượng là 1 nếu sản phẩm chưa có trong giỏ hàng
          setCart([...cart, { ...product, quantity: 1 }]);
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



  return (
      <CartContext.Provider value={{ cart, addToCart, decreaseItem, increaseItem, removeFromCart }}>
          {children}
      </CartContext.Provider>
  );
};
