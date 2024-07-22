import { PropertiesGrid, Account, Loading } from '@/components';
import { selectBookings, getAllBookings, selectBookingsStatus } from '@/state';
import { useFetchData } from '@/hooks';
import { Status } from '@/types';

export const Bookings = () => {
  const { data: booking, status } = useFetchData(getAllBookings(), selectBookings, selectBookingsStatus);

  // Display loading spinner while fetching data
  if (status === Status.LOADING) {
    return (
      <Account>
        <Loading />
      </Account>
    );
  }

  // Handle no bookings found
  if (!booking || booking.length === 0) {
    return (
      <Account>
        <div className='text-center flex-1 '>No Bookings yet</div>;
      </Account>
    );
  }

  return (
    <Account>
      <PropertiesGrid properties={booking} />
    </Account>
  );
};
