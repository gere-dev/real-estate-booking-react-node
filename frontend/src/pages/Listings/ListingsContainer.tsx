import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ListingsList } from '@/pages';
import { fetchListings, selectListings } from '@/state';

export const ListingsContainer = () => {
  const properties = useAppSelector(selectListings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
  return (
    <ul className='flex flex-1 flex-col gap-4 '>
      {properties.map((property) => {
        return <ListingsList key={property.property_id} property={property} />;
      })}
    </ul>
  );
};
