import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCardItem = () => {
    return (
      <Link href='/product/1'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="flex justify-center">
            <Image src="/images/product/apple.webp" alt="Apple Watch" width={262} height={358} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Apple Watch Series 9 Solo Loop</div>
            <p className="text-gray-700 text-base line-clamp-2">
              Introducing the Apple Watch Series 9 Solo Loop in Midnight Aluminum. Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <p className="text-base font-semibold text-gray-950">$10</p>
          </div>
        </div>
      </Link>
    );
};

export default ProductCardItem;