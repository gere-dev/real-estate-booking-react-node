import { ACCOUNT_NAV } from '@/constants';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const AccountNav = () => {
  const [active, setActive] = useState('');

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <section>
      <ul className='flex gap-4 md:flex-col md:gap-8'>
        {ACCOUNT_NAV.map((nav) => {
          return (
            <li key={nav.title}>
              <Link
                to={nav.path}
                className={`hover:text-white hover:bg-primary py-2 px-2 rounded ${pathname === nav.path ? 'bg-primary text-white' : ''} `}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
