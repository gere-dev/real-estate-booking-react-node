import { NewProperty, Property } from '@/types';
import { IconType } from 'react-icons';
import { BiDumbbell } from 'react-icons/bi';
import { MdDriveEta, MdPets, MdPool, MdTv, MdWifi } from 'react-icons/md';

export const PROPERTY_CHECKBOX_OPTIONS: {
  label: string;
  icon: IconType;
  name: keyof Property | keyof NewProperty;
}[] = [
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
