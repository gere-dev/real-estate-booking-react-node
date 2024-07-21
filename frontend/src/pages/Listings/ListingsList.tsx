import { ListingsCard } from '@/pages';
import { Property } from '@/types';
import { FC } from 'react';

interface Props {
  listings: Property[];
}
export const ListingsList: FC<Props> = ({ listings }) => {
  return (
    <ul className='flex flex-1 flex-col gap-4 '>
      {listings.map((property) => {
        return <ListingsCard key={property.property_id} property={property} />;
      })}
    </ul>
  );
};
