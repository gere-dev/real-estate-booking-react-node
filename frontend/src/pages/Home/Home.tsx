import React from 'react';
import { BiBed, BiDollar, BiMoney, BiPhone, BiSearch } from 'react-icons/bi';
import { IconType } from 'react-icons';
import heroImg from '@/assets/images/hero-right.webp';

export const Home = () => {
  return (
    <section className='px-3 flex flex-col gap-12'>
      <form className='flex flex-col gap-4'>
        <InputContainer>
          <IconContainer Icon={BiSearch} />
          <input className='px-2 flex-1 outline-none' placeholder='Location...' type='text' />
        </InputContainer>

        <InputContainer>
          <IconContainer Icon={BiDollar} />
          <input
            className=' flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
            type='range'
          />
        </InputContainer>

        <InputContainer>
          <IconContainer Icon={BiBed} />
          <select className='flex-1 bg-transparent border-none ' name='' id=''>
            <option value='any'>Any</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3+</option>
          </select>
        </InputContainer>
        <button className='bg-primary rounded-full text-white flex items-center justify-center py-2 gap-2'>
          <BiSearch className='text-xl' />
          <span className=''>Search</span>
        </button>
      </form>

      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-5xl'>Travel, book & experience!</h2>
          <p>Accompanied by us, make the memories you have always wanted! Book your dream resorts, villas, hotels and more...</p>
          <a href='#' className='text-white bg-primary rounded-full py-2 px-6 flex items-center w-fit gap-2 '>
            <BiPhone className='text-2xl' />
            <span className='font-bold mb-1 '>1-800-123-1234</span>
          </a>
        </div>
        <figure>
          <img src={heroImg} alt='hero image' />
        </figure>
      </div>
    </section>
  );
};

const InputContainer = ({ children }: { children: React.ReactNode }) => (
  <span className='border-b w-full flex gap-3 items-center py-3 '>{children}</span>
);
const IconContainer = ({ Icon }: { Icon: IconType }) => (
  <span className='text-primary text-2xl'>
    <Icon />
  </span>
);
