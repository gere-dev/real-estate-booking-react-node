import { Account, Loading } from '@/components';
import { useFetchData } from '@/hooks';
import { ListingsList } from '@/pages';
import { fetchListings, selectListings, selectListingsStatus } from '@/state';
import { Status } from '@/types';

export const Listings = () => {
  const { data: listings, status } = useFetchData(fetchListings(), selectListings, selectListingsStatus);

  // Display loading spinner while fetching data
  if (status === Status.LOADING) {
    return (
      <Account>
        <Loading />
      </Account>
    );
  }

  // Handle no listings found
  if (!listings || listings.length === 0) {
    return (
      <Account>
        <div className='text-center flex-1 '>You haven't listed any property.</div>;
      </Account>
    );
  }
  return (
    <Account>
      <ListingsList listings={listings} />
    </Account>
  );
};
