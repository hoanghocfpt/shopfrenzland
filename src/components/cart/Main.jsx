import Image from 'next/image';
import React, { useEffect, useState, useContext } from 'react';

import ProductItem from './ProductItem';
import TotalCart from './TotalCart';
import { CartContext } from '../../context/CartContext';
const CartMain = () => {
    
    const cart = useContext(CartContext);
    const cartLength = cart.length;

    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto min-h-[80vh]'>
            <h2 className='font-medium text-3xl'>Cart</h2>
            <div className=''>
                <div className='flex justify-between border-b border-gray-300 py-4 w-full'>
                    <span className='text-base font-medium w-6/12'>Products</span>
                    <span className='text-base font-medium w-4/12 text-left'>Quantity</span>
                    <span className='text-base font-medium w-2/12 text-right'>Subtotal</span>
                </div>
                <ProductItem />
            </div>
           {cartLength > 0 && <TotalCart />}
        </div>
    );
};

export default CartMain;