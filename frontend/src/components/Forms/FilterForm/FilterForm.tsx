import { NumOfBedField, PriceRangeField, SearchButton, SearchField } from '@/components';
import { filterProperties } from '@/state/filterProperties/filterPropertiesSlice';
import { useAppDispatch } from '@/state/hooks';
import { useState } from 'react';

export const FilterForm = () => {
  const [price, setPrice] = useState<[number, number]>([0, 700]);
  const [city, setCity] = useState<string>('');
  const [bed, setBed] = useState<number | string>('any');

  const dispatch = useAppDispatch();

  const minDistance = 20;

  const handlePriceChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };

  const handleSummit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      city,
      minPrice: price[0],
      maxPrice: price[1],
      bed,
    };
    dispatch(filterProperties(query));
  };

  return (
    <form
      onSubmit={handleSummit}
      className='flex flex-col gap-4 lg:flex-row lg:items-center lg:shadow-lg lg:-mt-16 rounded-full py-2 lg:px-8 z-10 lg:h-fit bg-white'
    >
      <SearchField onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} />
      <PriceRangeField onChange={handlePriceChange} value={price} />
      <NumOfBedField onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBed(e.target.value)} />
      <SearchButton />
    </form>
  );
};
