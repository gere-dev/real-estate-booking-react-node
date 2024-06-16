import React from 'react';
import { navs } from './navs';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <Link to={'/'}>Logo</Link>

      <nav>
        <ul className='flex gap-7'>
          {navs.map((nav) => {
            return (
              <li key={nav.title}>
                <Link to={nav.path!}>
                  <IconComponent Icon={nav.icon!} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const IconComponent = ({ Icon }: { Icon: IconType }) => {
  return <Icon className='text-primary text-3xl' />;
};
