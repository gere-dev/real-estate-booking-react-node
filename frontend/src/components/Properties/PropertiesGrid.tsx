import React from 'react';
import { Loading, PropertiesList } from '@/components';
import { Property } from '@/types';

interface Props {
  properties: Property[] | null;
}
export const PropertiesGrid: React.FC<Props> = ({ properties }) => {
  if (!properties) {
    return <Loading />;
  }
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mt-8'>
      {properties.map((property) => (
        <PropertiesList key={property.property_id} property={property} />
      ))}
    </ul>
  );
};
