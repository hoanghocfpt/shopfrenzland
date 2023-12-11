
import React from 'react';
import Filters from './Filters';
import Main from './Main';
import ShowAllProducts from '@/components/shop/ShowAllProducts';


const ShopPage = () => {
    return (
        <div className='px-4 py-20 flex max-w-screen-xl mx-auto flex-col '>
            <Filters />
            <ShowAllProducts />
           
        </div>
        
    );
};

export default ShopPage;