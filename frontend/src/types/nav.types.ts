import { IconType } from 'react-icons';

export type MAIN_Nav = {
  title: string;
  path?: string;
  icon?: IconType;
};

export type Account_Nav =
  | {
      title: string;
      path: (userId: number) => string;
    }
  | {
      title: string;
      path: string;
    };
