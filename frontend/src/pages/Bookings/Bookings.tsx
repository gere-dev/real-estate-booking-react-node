import { ACCOUNT_NAV } from '@/constants';
import React from 'react';
import { AccountNav } from '../Account';
// import { AccountNav } from '../Account';

export const Bookings = () => {
  return (
    <section className='max-width-container py-8 flex flex-col md:flex-row '>
      <AccountNav />
      <div>bookings</div>
    </section>
  );
};
