import React from 'react';
import { BiBed, BiDollar, BiMoney, BiPhone, BiSearch } from 'react-icons/bi';
import { IconType } from 'react-icons';
import heroImg from '@/assets/images/hero-right.webp';

export const Home = () => {
  return (
    <section className='max-width-container px-3 flex flex-col gap-12 md:flex-col-reverse md:mt-10 lg:h-[calc(100vh-58.6px)] lg:justify-center'>
      <form className='flex flex-col gap-4 lg:flex-row lg:items-center lg:shadow-lg lg:-mt-16 rounded-full py-2 lg:px-8 z-10 lg:h-fit bg-white'>
        <InputContainer>
          <IconContainer Icon={BiSearch} />
          <span>
            <input id='location' className='px-2 flex-1 outline-none' placeholder='Location...' type='text' />
            <label className='hidden lg:block text-gray-600 mt-2' htmlFor='location'>
              Search by location
            </label>
          </span>
        </InputContainer>

        <InputContainer>
          <IconContainer Icon={BiDollar} />
          <span>
            <input
              className='flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
              type='range'
              name='price'
            />
            <label className='hidden lg:block text-gray-600 mt-2' htmlFor='location'>
              Price
            </label>
          </span>
        </InputContainer>

        <InputContainer>
          <IconContainer Icon={BiBed} />
          <span>
            <select className='flex-1 bg-transparent border-none ' name='' id='number of Beds'>
              <option value='any'>Any</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3+</option>
            </select>
            <label className='hidden lg:block text-gray-600 mt-2' htmlFor='location'>
              Number of Beds
            </label>
          </span>
        </InputContainer>
        <button className='bg-primary rounded-full text-white flex items-center justify-center py-2 gap-2 lg:w-[170px] lg:h-[50px]'>
          <BiSearch className='text-xl' />
          <span className='lg:hidden'>Search</span>
        </button>
      </form>

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

const InputContainer = ({ children }: { children: React.ReactNode }) => (
  <span className='border-b lg:border-b-0 lg:border-r lg:pr-2 w-full flex gap-3 items-center py-3 '>{children}</span>
);
const IconContainer = ({ Icon }: { Icon: IconType }) => (
  <span className='text-primary text-2xl'>
    <Icon />
  </span>
);
