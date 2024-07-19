import { FC, useMemo } from 'react';
import { useAppSelector } from '@/hooks';
import { Link, useLocation } from 'react-router-dom';
import { Account_Nav } from '@/types';
import { selectUser } from '@/state';
interface Props {
  nav: Account_Nav;
}
export const AccountNavList: FC<Props> = ({ nav }) => {
  const { pathname } = useLocation();
  const userId = useAppSelector(selectUser)!.user_id;

  const isActive = useMemo(() => {
    if (!nav || !nav.path) return '';

    const isCurrentPath = pathname.startsWith(typeof nav.path === 'function' ? nav.path(userId) : nav.path);
    return isCurrentPath ? 'bg-primary text-white' : '';
  }, [nav, pathname, userId]);

  if (!nav || !nav.path) return null;

  return (
    <li className='flex gap-1' key={nav.title}>
      <Link
        to={typeof nav.path === 'function' ? nav.path(userId) : nav.path}
        className={`w-full flex items-center hover:text-white hover:bg-primary py-2 px-2 rounded ${isActive}`}
      >
        {nav.title}
      </Link>
    </li>
  );
};
