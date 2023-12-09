
import React from 'react';
import Filters from './Filters';
import Main from './Main';


const ShopPage = () => {
    return (
        <div className='px-4 py-20 flex max-w-screen-xl mx-auto flex-col '>
            <Filters />
            <Main />
        </div>
        
    );
};

export default ShopPage;