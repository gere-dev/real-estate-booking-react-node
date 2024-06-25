import React from 'react';
import { BiPhone } from 'react-icons/bi';
import heroImg from '@/assets/images/hero-right.webp';

export const HeroSection = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:items-center'>
      <div className='flex flex-col gap-4 flex-1'>
        <h2 className='font-semibold text-5xl'>Travel, book & experience!</h2>
        <p className='md:text-lg text-gray-600 max-w-[400px]'>
          Accompanied by us, make the memories you have always wanted! Book your dream resorts, villas, hotels and more...
        </p>
        <a href='#' className='text-white bg-primary md:mt-5 rounded-full py-2 px-6 flex items-center w-fit gap-2 '>
          <BiPhone className='text-2xl' />
          <span className='font-bold mb-1 py-1'>1-800-123-1234</span>
        </a>
      </div>
      <figure className='flex-1'>
        <img className='-z-10' src={heroImg} alt='hero image' />
      </figure>
    </div>
  );
};
