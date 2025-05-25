import Product from '@/components/Product/Product';
import React from 'react';

const AllProucts = async () => {
    const res = await fetch('http://localhost:3004/products', {
        cache: "no-store"
    })
    const products = await res.json()
    return (
        <div>
            <h1 className='text-4xl text-center '>All Products</h1>
            <div className='w-[90%] grid grid-cols-3 gap-8 mx-auto'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProucts;