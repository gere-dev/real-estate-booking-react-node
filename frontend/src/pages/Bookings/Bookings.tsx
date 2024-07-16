import React, { useEffect } from 'react';
import { AccountContainer, AccountNav } from '../../components/Account';
import { PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';

import { getAllBookings } from '@/state/bookings/bookingsSlice';
import { selectBookings } from '@/state/selectors';
// import { AccountNav } from '../Account';

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
