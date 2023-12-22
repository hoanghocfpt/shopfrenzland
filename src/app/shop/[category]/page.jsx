import React from 'react';
import Filters from '../Filters';
import ShowAllProducts from '@/components/shop/ShowAllProducts';

const CategoryPage = () => {
    return (
        <div className='px-4 py-20 flex max-w-screen-xl mx-auto flex-col '>
            <Filters />
            <ShowAllProducts />
           
        </div>
    );
};

export default CategoryPage;