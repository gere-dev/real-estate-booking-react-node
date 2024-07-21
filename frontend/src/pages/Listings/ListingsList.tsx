import { Loading } from '@/components';
import { useFetchData } from '@/hooks';
import { ListingsCard } from '@/pages';
import { fetchListings, selectListings, selectListingsStatus } from '@/state';
import { Status } from '@/types';

export const ListingsList = () => {
  const { data, status } = useFetchData(fetchListings(), selectListings, selectListingsStatus);

  // display a spinner while loading
  if (status === Status.LOADING) {
    return <Loading />;
  }
  return (
    <ul className='flex flex-1 flex-col gap-4 '>
      {data.map((property) => {
        return <ListingsCard key={property.property_id} property={property} />;
      })}
    </ul>
  );
};
