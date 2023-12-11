import React from 'react';

const TotalCart = () => {
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
                <span className='font-bold text-lg float-right'>$2,000</span>
            </div>
            <button className='w-full bg-black text-white py-3 text-lg font-semibold rounded-lg mt-4'>Checkout</button>


        </div>
    );
};

export default TotalCart;