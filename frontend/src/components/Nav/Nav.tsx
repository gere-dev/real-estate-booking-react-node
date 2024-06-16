import React from 'react';
import { navs } from './navs';
import { Link } from 'react-router-dom';
import { NavList } from './NavList';

export const Nav = () => {
  return (
    <header className='border'>
      <div className='flex justify-between items-center px-10  border-b py-2'>
        <Link className='bg-primary text-white py-1 px-3 rounded-full' to={'/'}>
          B
        </Link>
        <nav className=''>
          <ul className='flex gap-5  '>
            {navs.map((nav) => {
              return <NavList nav={nav} key={nav.title} />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
