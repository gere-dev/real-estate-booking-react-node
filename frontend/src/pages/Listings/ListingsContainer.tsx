import React from 'react';
import { useAppSelector } from '@/state/hooks';
import { selectProperties } from '@/state/properties/selectors';
import { ListingsList } from '@/pages';

export const ListingsContainer = () => {
  const properties = useAppSelector(selectProperties);
  return (
    <ul className='flex flex-1 flex-col gap-4 pt-8 md:pl-8'>
      {properties.map((property) => {
        return <ListingsList property={property} />;
      })}
    </ul>
  );
};
