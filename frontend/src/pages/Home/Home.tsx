import React, { Children } from 'react';
import { BiBed, BiDollar, BiMoney, BiPhone, BiSearch } from 'react-icons/bi';
import { IconType } from 'react-icons';
import heroImg from '@/assets/images/hero-right.webp';
import { FilterForm } from '@/components/Forms/FilterForm';

export const Home = () => {
  return (
    <section className='max-width-container px-3 flex flex-col gap-12 md:flex-col-reverse md:mt-10 lg:h-[calc(100vh-58.6px)] lg:justify-center'>
      <FilterForm />

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
    </section>
  );
};

const FieldContainer = ({ children }: { children: React.ReactNode }) => (
  <span className='border-b lg:border-b-0 lg:border-r lg:pr-2 w-full flex gap-3 items-center py-3 '>{children}</span>
);

const IconContainer = ({ Icon }: { Icon: IconType }) => (
  <span className='text-primary text-2xl'>
    <Icon />
  </span>
);
