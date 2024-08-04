import { ComponentProps, memo } from 'react';
import { FieldContainer } from './FieldContainer';
import { BiBed } from 'react-icons/bi';

export const NumOfBedField = memo(({ ...props }: ComponentProps<'select'>) => {
  return (
    <FieldContainer Icon={BiBed} htmlFor='bed' label='Number of Beds'>
      <select {...props} id='bed' className='flex-1 bg-transparent border-none w-full ' name='bed'>
        <option value='any'>Any</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3+</option>
      </select>
    </FieldContainer>
  );
});

NumOfBedField.displayName = 'NumOfBedField';
