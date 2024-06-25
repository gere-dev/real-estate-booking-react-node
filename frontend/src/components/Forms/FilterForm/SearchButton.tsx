import React from 'react';
import { BiSearch } from 'react-icons/bi';

export const SearchButton = () => {
  return (
    <button className='bg-primary rounded-full text-white flex items-center justify-center py-2 gap-2 lg:w-[170px] lg:h-[50px]'>
      <BiSearch className='text-xl' />
      <span className='lg:hidden'>Search</span>
    </button>
  );
};
