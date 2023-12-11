import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import TotalCart from './totalCart';

const CartMain = () => {
    
    

    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto'>
            <h2 className='font-medium text-3xl'>Cart</h2>
            <div className=''>
                <div className='flex justify-between border-b border-gray-300 py-4 w-full'>
                    <span className='text-base font-medium w-6/12'>Products</span>
                    <span className='text-base font-medium w-4/12 text-left'>Quantity</span>
                    <span className='text-base font-medium w-2/12 text-right'>Subtotal</span>
                </div>
                <ProductItem />
            </div>
           <TotalCart/>
        </div>
    );
};

export default CartMain;