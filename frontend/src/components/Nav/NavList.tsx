import { IconType } from 'react-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './types';
interface Props {
  nav: Nav;
}
export const NavList = ({ nav }: Props) => {
  return (
    <li className='flex hover:bg-primary hover:bg-opacity-40 rounded'>
      <Link className=' text-primary px-2 py-2' to={nav.path!}>
        <IconComponent Icon={nav.icon!} />
      </Link>
    </li>
  );
};

const IconComponent = ({ Icon }: { Icon: IconType }) => {
  return <Icon className='text-2xl' />;
};
