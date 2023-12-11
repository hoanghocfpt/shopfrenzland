"use client";
import React, { useEffect, useState } from 'react';
import ProductCardItem from '../ProductCardItem';
const ShowAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                console.log(data); // Kiểm tra dữ liệu trả về
                setProducts(data); // Cập nhật state với mảng products
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='grid grid-cols-1 gap-6 justify-end p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {Array.isArray(products) && products.map(product => 
                <ProductCardItem 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    image={product.image} 
                    description={product.description} 
                    price={product.price} 
                />
            )}

        </div>
    );
};

export default ShowAllProducts;