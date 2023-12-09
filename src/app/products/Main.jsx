import Image from 'next/image';
import React from 'react';


const Main = () => {
    return (
        <div className='flex w-full'>
            <div className='flex-shrink-0 pr-8 w-5/12'>
                <Image src="/images/product/product2.jpg" className='w-full h-full object-cover' alt="hero" width={333} height={416} />
            </div>
            <div className='flex-shrink-0 w-7/12 p-4'>
                <h3 className='font-bold text-3xl'>BLACK IGLOO HOODIE</h3>
                <div className='text-2xl font-medium my-4'>$499.00</div>
                <div className='my-5'>
                    <span className='font-bold text-lg'>Description</span>
                    <p>This black hoodie features ultra soft and durable 80/20 cotton-poly blends, side ribbing for extra flexibility, and silhouette suited for both comfort and activewear. Silk printing on the front and back. It includes garment dyeing and softening treatments like enzyme and silicone wash, providing a comfortable texture.</p>
                </div>
                <button className='text-lg font-bold w-full bg-black px-6 py-3 text-white rounded-lg'>Add to cart</button>
            </div>

        </div>
    );
};

export default Main;