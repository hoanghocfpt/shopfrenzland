import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCardItem = () => {
    return (
      <Link href='/products/1'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <div className="flex justify-center">
            <Image className='w-full h-full object-cover' src="/images/product/product2.jpg" alt="Apple Watch" width={262} height={358} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">BLACK IGLOO HOODIE</div>
            <p className="text-gray-700 text-base line-clamp-2">
            This black hoodie features ultra soft and durable 80/20 cotton-poly blends, side ribbing for extra flexibility, and silhouette suited for both comfort and activewear. Silk printing on the front and back. It includes garment dyeing and softening treatments like enzyme and silicone wash, providing a comfortable texture.
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <p className="text-base font-semibold text-gray-950">$69.00</p>
          </div>
        </div>
      </Link>
    );
};

export default ProductCardItem;