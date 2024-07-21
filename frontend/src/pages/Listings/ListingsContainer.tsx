import { Loading } from '@/components';
import { useFetchData } from '@/hooks';
import { ListingsList } from '@/pages';
import { fetchListings, selectListings, selectListingsStatus } from '@/state';
import { Status } from '@/types';

export const ListingsContainer = () => {
  const { data, status } = useFetchData(fetchListings(), selectListings, selectListingsStatus);

  // display a spinner while loading
  if (status === Status.LOADING) {
    return <Loading />;
  }
  return (
    <ul className='flex flex-1 flex-col gap-4 '>
      {data.map((property) => {
        return <ListingsList key={property.property_id} property={property} />;
      })}
    </ul>
  );
};
