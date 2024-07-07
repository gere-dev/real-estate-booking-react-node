import { ACCOUNT_NAV } from '@/constants';
import { Link, useLocation } from 'react-router-dom';

export const AccountNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <ul className='flex gap-4  md:flex-col  mb-6 md:mr-6'>
        {ACCOUNT_NAV.map((nav) => {
          return (
            <li className='flex  gap-1' key={nav.title}>
              <Link
                to={nav.path}
                className={`w-full  flex items-center  hover:text-white hover:bg-primary py-2 px-2 rounded ${
                  pathname === nav.path ? 'bg-primary text-white' : ''
                } `}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
