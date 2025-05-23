import Image from 'next/image';
import React from 'react';
import nextImg from '../../assets/E8.png'

const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-3xl text-center '>GalleryPage</h1>
            <img src="https://i.ibb.co/bM6tS9Tv/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" className='max-w-5xl mx-auto' alt="" />
            <h1 className='text-3xl text-center '>NextJs Image Compo</h1>
            <Image className='mx-auto' src="https://i.ibb.co/bM6tS9Tv/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" alt='next image' width='500' height='500' />
            <h1 className='text-3xl text-center '>Local Image Compo</h1>
            <Image className='mx-auto' src={nextImg} alt='next image' width='500' height='500' />
        </div>
    );
};

export default GalleryPage;