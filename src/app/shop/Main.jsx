import ProductCardItem from '@/components/ProductCardItem';
import React from 'react';

const Main = () => {
    return (
        <div className='grid grid-cols-1 gap-6 justify-end p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />

            </div>
    );
};

export default Main;