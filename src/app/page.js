import Navbar from '@/components/Navbar';
import Product from '@/components/Product/Product';
import Link from 'next/link';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:3004/products', {
    next: {
      revalidate: 30
    }
  })
  const products = await res.json()
  return (
    <div>

      <h1 className='text-4xl text-center'>This is home page</h1>
      <div className='w-[90%] grid grid-cols-3 gap-8 mx-auto'> {
        products.slice(0, 3).map(product => <Product key={product.id} product={product}></Product>)
      }
      </div>
      <div className='text-center my-10'> <Link className='bg-black text-white px-5 rounded-lg shadow-md hover:bg-yellow-500' href='/products'>Show more</Link>
      </div>

    </div>
  );
};

export default HomePage;