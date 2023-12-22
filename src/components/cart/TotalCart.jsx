"use client";
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const TotalCart = () => {
    const { cart, grandTotal } = useContext(CartContext);
    console.log(cart);
    const checkout = async () => {
        await fetch(`http://localhost:3000/api/checkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products: cart }),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(response);
            if (response.url) {
              window.location.href = response.url;
            }
          });
      }
    
    return (
        <div className='border rounded-lg border-gray-200 mt-8 w-full p-5'>
            <div className='py-4 border-b border-gray-200'>
                <h4 className='font-semibold text-lg'>Summary</h4>
            </div>
            <div className='py-4 border-b border-gray-200'>
                <span className='font-medium text-lg'>Delivery Charge</span>
                <span className='font-medium text-base float-right'>Free</span>
            </div>
            <div className='py-4 border-b border-gray-200'>
                <span className='font-bold text-lg'>Grand Total</span>
                <span className='font-bold text-lg float-right'>{grandTotal}</span>
            </div>
            <button className='w-full bg-black text-white py-3 text-lg font-semibold rounded-lg mt-4' onClick={checkout}>Checkout</button>


        </div>
    );
};

export default TotalCart;