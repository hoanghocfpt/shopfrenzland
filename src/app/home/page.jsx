import ProductCardItem from '@/components/ProductCardItem';
import ShowAllProducts from '@/components/shop/ShowAllProducts';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div className='min-h-dvh'>
            <div className='bg-background-image-homepage bg-center md:bg-right lg:bg-center mb-6 bg-no-repeat w-full h-[50vh] md:h-[70vh] max-w-screen-xl mx-auto px-6 sm:px-4 md:px-4 lg:px-4'>
                <div className='w-full h-full justify-center flex flex-col'>
                    <h1 className='text-4xl md:text-6xl mb-4 font-extrabold'>Shopping with Bobby</h1>
                    <p className='text-lg md:w-1/2 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut voluptatibus autem sed dolorem!</p>
                    <Link href='/shop'>
                        <div className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800'>
                            <span className='text-white mr-3 leading-none uppercase font-semibold'>Shopping now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            
            <div className='py-5'>
                <h2 className='text-4xl font-bold text-center'>The new products</h2>
                <div>
                    <div className='px-4 py-4 flex max-w-screen-xl mx-auto flex-col'>
                        <ShowAllProducts />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;