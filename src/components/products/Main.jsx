"use client";
import Image from 'next/image';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const Main = () => {
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    let id = useParams().slug;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(error => console.error('Error:', error));
    }, []);

  

    const handleAddToCart = () => {
        if (product) {
          let productToCart = {
            id: product.id,
            name: product.title,
            price: product.price, // Add this line
          };
    
          addToCart(productToCart);
          setAddedToCart(true);
        }
    }; 
    return (
        <div className='flex w-full'>
        <div className='flex-shrink-0 pr-8 w-5/12'>
            {product && <Image id='imgProduct' src={product.image} className='w-full h-full object-cover' alt="hero" width={333} height={416} />}
        </div>
        <div className='flex-shrink-0 w-7/12 p-4'>
            {product && <h3 id='nameProduct' className='font-bold text-3xl'>{product.title}</h3>}
            {product && <div id='priceProduct' className='text-2xl font-medium my-4'>${product.price}</div>}
            <div className='my-5'>
                <span className='font-bold text-lg'>Description</span>
                {product && <p>{product.description}</p>}
            </div>
            <button className='text-lg font-medium w-full bg-black px-6 py-3 text-white rounded-lg'>
            {addedToCart ? (
                <Link href="/cart" className='text-lg font-medium w-full block'>
                    View your cart
                </Link>
            ):( <span className='w-full block' onClick={handleAddToCart} >Add to cart</span>
            )}
            </button>
        </div>

    </div>
    );
};

export default Main;