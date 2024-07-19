import React, { useEffect } from 'react';
import { AccountContainer } from '../../components/Account';
import { PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';

import { selectBookings } from '@/state/bookings/bookingsSelectors';
import { getAllBookings } from '@/state/bookings/bookingsThunks';

export const Bookings = () => {
  const booking = useAppSelector(selectBookings);
  const dispatch = useAppDispatch();
  console.log(booking);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <AccountContainer>
      {!booking.length ? <div className='text-center flex-1 '>No Bookings yet</div> : <PropertiesGrid properties={booking} />}
    </AccountContainer>
  );
};
