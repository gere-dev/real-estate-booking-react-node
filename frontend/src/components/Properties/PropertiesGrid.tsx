import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties } from '@/state/properties/propertiesSlice';
import { selectProperties } from '@/state/properties/selectors';
import { Loading, PropertiesList } from '@/components';

export const PropertiesGrid = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (!properties) {
    return <Loading />;
  }
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-8'>
      {properties.map((property) => (
        <PropertiesList key={property.property_id} property={property} />
      ))}
    </ul>
  );
};
