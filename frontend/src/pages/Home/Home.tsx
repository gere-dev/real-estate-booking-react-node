import React from 'react';
import { BiBed, BiDollar, BiMoney, BiSearch } from 'react-icons/bi';
import { IconType } from 'react-icons';

export const Home = () => {
  return (
    <section className='px-3'>
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
