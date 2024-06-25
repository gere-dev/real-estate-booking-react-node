import { FieldContainer } from './FieldContainer';
import { BiBed, BiDollar, BiSearch } from 'react-icons/bi';
import { FormContainer } from './FormContainer';

export const FilterForm = () => {
  const renderLocationInput = () => {
    return <input id='location' className='px-2 flex-1 outline-none' placeholder='Location...' type='text' />;
  };

  const renderPriceRange = () => {
    return (
      <input
        className='flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
        type='range'
        name='price'
      />
    );
  };
  const renderNumOfBed = () => {
    return (
      <select className='flex-1 bg-transparent border-none ' name='' id='number of Beds'>
        <option value='any'>Any</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3+</option>
      </select>
    );
  };

  return (
    <FormContainer>
      <FieldContainer Icon={BiSearch} children={renderLocationInput()} htmlFor='location' label='Location' />
      <FieldContainer Icon={BiDollar} children={renderPriceRange()} htmlFor='price' label='Price Range' />
      <FieldContainer Icon={BiBed} children={renderNumOfBed()} htmlFor='bed' label='Number Of Bed' />
      <button className='bg-primary rounded-full text-white flex items-center justify-center py-2 gap-2 lg:w-[170px] lg:h-[50px]'>
        <BiSearch className='text-xl' />
        <span className='lg:hidden'>Search</span>
      </button>
    </FormContainer>
  );
};
