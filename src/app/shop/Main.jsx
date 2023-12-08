import ProductCardItem from '@/components/ProductCardItem';
import React from 'react';

const Main = () => {
    return (
        <div className='grid grid-cols-3 gap-6 justify-right'>
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />
                <ProductCardItem />

            </div>
    );
};

export default Main;