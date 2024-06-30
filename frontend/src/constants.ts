import { BiDumbbell } from 'react-icons/bi';
import { MdDriveEta, MdPets, MdPool, MdTv, MdWifi, MdWorkOutline } from 'react-icons/md';

export const NAV_HEIGHT = '58.6px';

export const ACCOUNT_NAV = [
  {
    title: 'Listings',
    path: '/account',
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

export const PROPERTY_CHECKBOX_OPTIONS = [
  {
    label: 'Wifi',
    icon: MdWifi,
    name: 'wifi',
  },
  {
    label: 'Parking',
    icon: MdDriveEta,
    name: 'parking',
  },
  {
    label: 'Pool',
    icon: MdPool,
    name: 'pool',
  },
  {
    label: 'Netflix',
    icon: MdTv,
    name: 'netflix',
  },
  {
    label: 'Pets',
    icon: MdPets,
    name: 'pets',
  },
  {
    label: 'Gym',
    icon: BiDumbbell,
    name: 'gym',
  },
];
