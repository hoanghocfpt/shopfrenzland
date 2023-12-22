import ProductCardItem from '@/components/ProductCardItem';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div className='bg-background-image-homepage w-full mw'>
            <div>
                <h1 className='text-5xl font-extrabold'>Shopping with Bobby</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut voluptatibus autem sed dolorem!</p>
                <Link href='/shop'>
                    <div className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800'>
                        <span className='text-white uppercase font-semibold'>Shopping now</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;