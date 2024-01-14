import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCardItem = ({ id, image,name, description, price }) => {
    return (
      <Link href={`/products/${id}`} className='flex justify-center'>
        <div className="max-w-md rounded-md overflow-hidden shadow-lg w-full">
          <div className="flex justify-center h-96">
            <Image className='w-full h-full object-cover' src={image} alt='' width={262} height={358} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 line-clamp-1">{name}</div>
            <p className="text-gray-700 text-base line-clamp-2">
              {description}
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <p className="text-base font-semibold text-gray-950">${price}</p>
          </div>
        </div>
      </Link>
    );
};

export default ProductCardItem;