import { IoHomeSharp } from 'react-icons/io5';
import { RiLogoutCircleRFill, RiLoginCircleFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
import { Nav } from './types';

export const navs: Nav[] = [
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
  {
    title: 'auth',
    path: '/login',
    icon: RiLoginCircleFill || RiLogoutCircleRFill,
  },
];
