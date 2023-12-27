'use client'
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import React from 'react';

const Navbar = () => {
    
    return (
        <div className='border border-gray-200 rounded-lg h-fit'>
            <div className='py-4 px-6 flex gap-4 border-b'>
                <Image src="/asset/icons/profile.svg" alt="avatar" width={50} height={50} />
                <div className='flex flex-col'>
                    <span className='font-semibold text-lg'>phamvanhoang</span>
                    <span className='text-base'>iloveanh18@gmail.com</span>
                </div>
            </div>
            <div>
                <ul className='py-2'>
                    <li>
                        <Link href={'/account'} className='flex items-center py-4 px-6 gap-4 justify-start'>
                            <Image src="/asset/icons/user.svg" alt="" width={24} height={32} />
                            <span className='text-lg font-normal'>Personal Information</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/account/categories'} className='flex items-center py-4 px-6 gap-4 justify-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                        </svg>
                            <span className='text-lg font-normal'>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/account/products'} className='flex items-center py-4 px-6 gap-4 justify-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>

                            <span className='text-lg font-normal'>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/account/orders'} className='flex items-center py-4 px-6 gap-4 justify-start'>
                            <Image src="/asset/icons/orders.svg" alt="" width={24} height={32} />
                            <span className='text-lg font-normal'>My Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={signOut} href={'/login'} className='flex items-center py-4 px-6 gap-4 justify-start'>
                            <Image src="/asset/icons/logout.svg" alt="" width={24} height={32} />
                            <span className='text-lg font-normal'>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;