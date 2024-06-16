import React from 'react';
import { navs } from './navs';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <div className='flex justify-between items-center px-10 py-5 border-b'>
        <Link className='bg-primary text-white py-1 px-3 rounded-full' to={'/'}>
          B
        </Link>
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
      </div>
    </header>
  );
};

const IconComponent = ({ Icon }: { Icon: IconType }) => {
  return <Icon className='text-primary text-3xl' />;
};
