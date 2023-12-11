"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Main = () => {
    const [product, setProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    let id = useParams().slug;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(error => console.error('Error:', error));
    }, []);
    let carts = [];
  

    const handleAddToCart = () => {
        if (localStorage.getItem('cartItem')) {
            carts = JSON.parse(localStorage.getItem('cartItem'));
        }else{
            carts = [];
        }
        if (product) {
            let productToCart = {
                id: product.id,
            };
           
            carts.push(productToCart);
            localStorage.setItem('cartItem', JSON.stringify(carts));
            setAddedToCart(true);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex w-full'>
            <div className='flex-shrink-0 pr-8 w-5/12'>
                <Image id='imgProduct' src={product.image} className='w-full h-full object-cover' alt="hero" width={333} height={416} />
            </div>
            <div className='flex-shrink-0 w-7/12 p-4'>
                <h3 id='nameProduct' className='font-bold text-3xl'>{product.title}</h3>
                <div id='priceProduct' className='text-2xl font-medium my-4'>${product.price}</div>
                <div className='my-5'>
                    <span className='font-bold text-lg'>Description</span>
                    <p>{product.description}</p>
                </div>
                <button className='text-lg font-medium w-full bg-black px-6 py-3 text-white rounded-lg'>
                {addedToCart ? (
                    <a href="/cart" className='text-lg font-medium w-full block'>
                        View your cart
                    </a>
                ):( <span className='w-full block' onClick={handleAddToCart} >Add to cart</span>
                )}
                </button>
            </div>

        </div>
    );
};

export default Main;