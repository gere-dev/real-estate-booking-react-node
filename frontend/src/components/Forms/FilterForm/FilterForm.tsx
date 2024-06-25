import { BiBed, BiDollar, BiSearch } from 'react-icons/bi';
import { FieldContainer, SearchButton, FormContainer } from '@/components';

export const FilterForm = () => {
  return (
    <FormContainer>
      <FieldContainer Icon={BiSearch} children={<LocationInput />} htmlFor='location' label='Search by Location' />
      <FieldContainer Icon={BiDollar} children={<PriceRangeInput />} htmlFor='price' label='Price Range' />
      <FieldContainer Icon={BiBed} children={<NumOfBedSelect />} htmlFor='bed' label='Number of Beds' />
      <SearchButton />
    </FormContainer>
  );
};

const LocationInput = () => {
  return <input id='location' className='pr-2 flex-1 outline-none w-full' placeholder='Location...' type='text' name='location' />;
};

const PriceRangeInput = () => {
  return (
    <input
      className='flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
      type='range'
      name='price'
    />
  );
};
const NumOfBedSelect = () => {
  return (
    <select className='flex-1 bg-transparent border-none w-full ' name='bed' id='number of Beds'>
      <option value='any'>Any</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3+</option>
    </select>
  );
};
