import { AccountContainer, Loading } from '@/components';
import { useFetchData } from '@/hooks';
import { ListingsList } from '@/pages';
import { getAllBookings, selectBookings, selectBookingsStatus } from '@/state';
import { Status } from '@/types';

export const Listings = () => {
  const { data: listings, status } = useFetchData(getAllBookings(), selectBookings, selectBookingsStatus);

  // Display loading spinner while fetching data
  if (status === Status.LOADING) {
    return (
      <AccountContainer>
        <Loading />
      </AccountContainer>
    );
  }

  // Handle no listings found
  if (!listings || listings.length === 0) {
    return (
      <AccountContainer>
        <div className='text-center flex-1 '>You haven't listed any property.</div>;
      </AccountContainer>
    );
  }
  return (
    <AccountContainer>
      <ListingsList listings={listings} />
    </AccountContainer>
  );
};
