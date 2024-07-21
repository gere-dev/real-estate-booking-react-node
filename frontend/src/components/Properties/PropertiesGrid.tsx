import React from 'react';
import { PropertiesCard } from '@/components';
import { Booking, Property } from '@/types';

interface Props {
  properties: Property[] | Booking[];
}
export const PropertiesGrid: React.FC<Props> = ({ properties }) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 flex-1'>
      {properties.map((property) => (
        <PropertiesCard key={property.property_id} property={property} />
      ))}
    </ul>
  );
};
