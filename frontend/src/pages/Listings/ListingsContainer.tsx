import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { ListingsList } from '@/pages';
import { fetchListings } from '@/state/listings/listingsThunks';
import { selectListings } from '@/state/listings/listingsSelectors';

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
