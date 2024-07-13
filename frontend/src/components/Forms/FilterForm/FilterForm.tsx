import { NumOfBedField, PriceRangeField, SearchButton, SearchField } from '@/components';
import { useState } from 'react';

export const FilterForm = () => {
  const [formData, setFormData] = useState<{ location: string; price: number; bed: number }>({
    location: '',
    price: '',
    bed: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'price' ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
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
      <SearchField onChange={handleChange} />
      <PriceRangeField onChange={handleChange} />
      <NumOfBedField onChange={handleChange} />
      <SearchButton />
    </form>
  );
};
