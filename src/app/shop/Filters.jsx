import React from 'react';

const Filters = () => {
    return (
        <div>
            <div className='w-36'>
                <div className='flex flex-col gap-4'>
                    <h6>Product Categories</h6>
                    <div className="flex flex-col gap-3 ">
                        <label className="flex items-center justify-center w-fit gap-2">
                            <input type="radio" name='categories' className='w-6 h-6 rounded-full relative border-4 border-gray-950 checked:after:content-[""] flex justify-center items-center checked:after:rounded-full checked:after:absolute checked:after:w-3 checked:after:h-3 checked:after:bg-black checked:after:z-50 '/>
                            <span>Shoes</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;