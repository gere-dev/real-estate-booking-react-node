import { Account_Nav, Main_Nav } from '@/types';
import { FaCircleUser } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';

export const MAIN_NAV: Main_Nav[] = [
  {
    title: 'Home',
    path: '/',
    icon: IoHomeSharp,
  },
  {
    title: 'Account',
    path: '/account',
    icon: FaCircleUser,
  },
];

export const ACCOUNT_NAV: Account_Nav[] = [
  {
    title: 'Listings',
    path: (userId: number) => `/account/${userId}`,
  },
  {
    title: 'Bookings',
    path: '/account/bookings',
  },
  {
    title: 'Add Listing',
    path: '/account/add-listing',
  },
];
