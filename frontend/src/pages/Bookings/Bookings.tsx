import { PropertiesGrid, AccountContainer, Loading } from '@/components';
import { selectBookings, getAllBookings, selectBookingsStatus } from '@/state';
import { useFetchData } from '@/hooks';
import { Status } from '@/types';

export const Bookings = () => {
  const { data: booking, status } = useFetchData(getAllBookings(), selectBookings, selectBookingsStatus);

  // Display loading spinner while fetching data
  if (status === Status.LOADING) {
    return (
      <AccountContainer>
        <Loading />
      </AccountContainer>
    );
  }

  // Handle no bookings found
  if (!booking || booking.length === 0) {
    return (
      <AccountContainer>
        <div className='text-center flex-1 '>No Bookings yet</div>;
      </AccountContainer>
    );
  }

  return (
    <AccountContainer>
      <PropertiesGrid properties={booking} />
    </AccountContainer>
  );
};
