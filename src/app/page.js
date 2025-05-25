import Product from '@/components/Product/Product';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:3004/products', {
    next: {
      revalidate: 5,
    }
  })
  const products = await res.json()

  return (
    <div>
      <h1 className='text-4xl text-center'>This is home Loader</h1>
      <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto'>
        {
          products.slice(0, 3).map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default HomePage;