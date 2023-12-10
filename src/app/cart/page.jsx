import Image from 'next/image';
import React from 'react';

const CartPage = () => {
    return (
        <div className='max-w-screen-xl py-8 px-4 mx-auto'>
            <h2 className='font-medium text-3xl'>Cart</h2>
            <div className=''>
                <div className='flex justify-between border-b border-gray-300 py-4 w-full'>
                    <span className='text-base font-medium w-6/12'>Products</span>
                    <span className='text-base font-medium w-4/12 text-left'>Quantity</span>
                    <span className='text-base font-medium w-2/12 text-right'>Subtotal</span>
                </div>
                <ul className='w-full'>
                    <li className='flex justify-between w-full border-b py-5 items-center'>
                        <div className='flex-shrink-0 max-w-full w-1/12 h-32'>
                            <Image className='w-full h-full object-cover' src='/images/product/product2.jpg' width={100} height={100} alt='' />
                        </div>
                        <div className='flex-shrink-0 max-w-full w-5/12 text-left px-4'>
                            <h4 className='font-bold text-base'>BLACK IGLOO HOODIE</h4>
                            <span className='font-normal'>$99.99</span>
                        </div>
                        <div className='flex-shrink-0 w-3/12 '>
                            <div className='w-28 px-2 flex h-10  border rounded-lg border-black '>
                                <div className='flex items-center justify-center cursor-pointer'>
                                    <Image className='w-12' src='/asset/icons/minus.svg' width={24} height={24} alt='' />
                                </div>
                                <input className='w-full h-full outline-none text-center font-semibold' type='text' name='quantity' value={1}></input>
                                <div className='flex items-center justify-center cursor-pointer'>
                                    <Image className='w-12' src='/asset/icons/plus.svg' width={24} height={24} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex-shrink-0 max-w-full w-2/12'>
                            <span className='font-medium text-lg text-black'>$99.99</span>
                        </div>
                        <div className='flex-shrink-0 max-w-full w-1/12'>
                            <div className='flex justify-end cursor-pointer'>
                                <Image className='w-6' src='/asset/icons/delete.svg' width={24} height={24} alt='' />
                            </div>

                        </div>
                    </li>
                    <li className='flex justify-between w-full border-b py-5 items-center'>
                        <div className='flex-shrink-0 max-w-full w-1/12 h-32'>
                            <Image className='w-full h-full object-cover' src='/images/product/product2.jpg' width={100} height={100} alt='' />
                        </div>
                        <div className='flex-shrink-0 max-w-full w-5/12 text-left px-4'>
                            <h4 className='font-bold text-base'>BLACK IGLOO HOODIE</h4>
                            <span className='font-normal'>$99.99</span>
                        </div>
                        <div className='flex-shrink-0 w-3/12 '>
                            <div className='w-28 px-2 flex h-10  border rounded-lg border-black '>
                                <div className='flex items-center justify-center cursor-pointer'>
                                    <Image className='w-12' src='/asset/icons/minus.svg' width={24} height={24} alt='' />
                                </div>
                                <input className='w-full h-full outline-none text-center font-semibold' type='text' name='quantity' value={1}></input>
                                <div className='flex items-center justify-center cursor-pointer'>
                                    <Image className='w-12' src='/asset/icons/plus.svg' width={24} height={24} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex-shrink-0 max-w-full w-2/12'>
                            <span className='font-medium text-lg text-black'>$99.99</span>
                        </div>
                        <div className='flex-shrink-0 max-w-full w-1/12'>
                            <div className='flex justify-end cursor-pointer'>
                                <Image className='w-6' src='/asset/icons/delete.svg' width={24} height={24} alt='' />
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CartPage;