
import React from 'react';
import Filters from './Filters';
import Main from './Main';


const ShopPage = () => {
    return (
        <div className='px-0 py-20 flex max-w-screen-2xl mx-auto flex-col lg:flex-row'>
            <Filters />
            <Main />
        </div>
        
    );
};

export default ShopPage;