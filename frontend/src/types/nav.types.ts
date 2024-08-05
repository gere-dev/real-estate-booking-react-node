import { IconType } from 'react-icons';

export type Main_Nav = {
  title: string;
  path?: string | ((userId: number) => string);
  icon?: IconType;
};

export type Account_Nav = {
  title: string;
  path: string | ((userId: number) => string);
};
