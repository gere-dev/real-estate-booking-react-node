import { useEffect } from 'react';
import { PropertiesGrid, AccountContainer } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectBookings, getAllBookings } from '@/state';

export const Bookings = () => {
  const booking = useAppSelector(selectBookings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <AccountContainer>
      {!booking.length ? <div className='text-center flex-1 '>No Bookings yet</div> : <PropertiesGrid properties={booking} />}
    </AccountContainer>
  );
};
