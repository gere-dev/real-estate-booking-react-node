import { BiBed, BiDollar, BiSearch } from 'react-icons/bi';
import { FieldContainer, SearchButton } from '@/components';
import { ComponentProps, useState } from 'react';

export const FilterForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    price: '',
    bed: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSummit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSummit}
      className='flex flex-col gap-4 lg:flex-row lg:items-center lg:shadow-lg lg:-mt-16 rounded-full py-2 lg:px-8 z-10 lg:h-fit bg-white'
    >
      <FieldContainer Icon={BiSearch} children={<LocationInput onChange={handleChange} />} htmlFor='location' label='Search by Location' />
      <FieldContainer Icon={BiDollar} children={<PriceRangeInput onChange={handleChange} />} htmlFor='price' label='Price Range' />
      <FieldContainer Icon={BiBed} children={<NumOfBedSelect onChange={handleChange} />} htmlFor='bed' label='Number of Beds' />
      <SearchButton />
    </form>
  );
};

const LocationInput = ({ ...props }: ComponentProps<'input'>) => {
  return <input {...props} id='location' className='pr-2 flex-1 outline-none w-full' placeholder='Location...' type='text' name='location' />;
};

const PriceRangeInput = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <input
      {...props}
      id='price'
      className='flex-1 appearance-none w-full h-2 bg-primary bg-opacity-30 rounded-lg outline-none focus:outline-none hover:cursor-pointer range-input'
      type='range'
      name='price'
    />
  );
};
const NumOfBedSelect = ({ ...props }: ComponentProps<'select'>) => {
  return (
    <select {...props} id='bed' className='flex-1 bg-transparent border-none w-full ' name='bed'>
      <option value='any'>Any</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3+</option>
    </select>
  );
};
