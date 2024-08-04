import { NumOfBedField, PriceRangeField, SearchButton, SearchField } from '@/components';
import { filterProperties } from '@/state';
import { useAppDispatch } from '@/hooks';
import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FilterForm = memo(() => {
  const [price, setPrice] = useState<[number, number]>([0, 880]);
  const [city, setCity] = useState<string>('');
  const [bed, setBed] = useState<number | string>('any');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const minDistance = 20;

  const handlePriceChange = useCallback(
    (event: Event, newValue: number | number[], activeThumb: number) => {
      if (!Array.isArray(newValue)) return;

      if (activeThumb === 0) {
        setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
      } else {
        setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
      }
    },
    [price]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      city,
      minPrice: price[0],
      maxPrice: price[1],
      bed,
    };
    dispatch(filterProperties(query));
    navigate('/filtered-properties', { state: query });
  };

  const handleLocation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value), []);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 lg:flex-row lg:items-center lg:shadow-lg lg:-mt-16 rounded-full py-2 lg:px-8 z-10 lg:h-fit bg-white'
    >
      <SearchField onChange={handleLocation} />
      <PriceRangeField onChange={handlePriceChange} value={price} />
      <NumOfBedField onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBed(e.target.value)} />
      <SearchButton />
    </form>
  );
});

FilterForm.displayName = 'FilterForm';
