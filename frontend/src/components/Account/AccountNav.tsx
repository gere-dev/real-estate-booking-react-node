import { ACCOUNT_NAV } from '@/constants';
import { useAppSelector } from '@/state/hooks';
import { selectUser } from '@/state/selectors';
import { Link, useLocation } from 'react-router-dom';

export const AccountNav = () => {
  const { pathname } = useLocation();

  const userId = useAppSelector(selectUser)!.user_id;
  const propertyId = 0;
  return (
    <>
      <ul className='flex gap-4 md:flex-col mb-6 md:mr-6'>
        {ACCOUNT_NAV.map((nav) => (
          <li className='flex gap-1' key={nav.title}>
            <Link
              to={typeof nav.path === 'function' ? nav.path(userId) : nav.path}
              className={`w-full flex items-center hover:text-white hover:bg-primary py-2 px-2 rounded ${
                pathname.startsWith(typeof nav.path === 'function' ? nav.path(userId) : nav.path) ? 'bg-primary text-white' : ''
              }`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
