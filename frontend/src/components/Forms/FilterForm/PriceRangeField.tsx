import { ComponentProps } from 'react';
import { FieldContainer } from './FieldContainer';
import { BiDollar } from 'react-icons/bi';

export const PriceRangeField = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <FieldContainer Icon={BiDollar} htmlFor='price' label='Price Range'>
      <input
        {...props}
        id='price'
        className='flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
        type='range'
        name='price'
      />
    </FieldContainer>
  );
};
