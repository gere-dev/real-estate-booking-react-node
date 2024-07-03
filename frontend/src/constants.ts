import { BiDumbbell } from 'react-icons/bi';
import { MdDriveEta, MdPets, MdPool, MdTv, MdWifi, MdWorkOutline } from 'react-icons/md';

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

export const LoginFields: {
  email: string;
  password: string;
} = {
  email: 'email',
  password: 'password',
};

export const RegisterFields: {
  name: string;
  email: string;
  password: string;
} = {
  name: 'name',
  email: 'email',
  password: 'password',
};
