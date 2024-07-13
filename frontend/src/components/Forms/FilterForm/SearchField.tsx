import { ComponentProps } from 'react';
import { FieldContainer } from './FieldContainer';
import { BiSearch } from 'react-icons/bi';

export const SearchField = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <FieldContainer Icon={BiSearch} htmlFor='location' label='Search by location'>
      <input {...props} id='location' className='pr-2 flex-1 outline-none w-full' placeholder='Location...' type='text' name='location' />
    </FieldContainer>
  );
};
