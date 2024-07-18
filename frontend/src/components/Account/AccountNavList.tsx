import { FC } from 'react';
import { useAppSelector } from '@/state/hooks';
import { selectUser } from '@/state/selectors';
import { Link, useLocation } from 'react-router-dom';
import { Account_Nav } from '@/types/accountnav.type';
interface Props {
  nav: Account_Nav;
}
export const AccountNavList: FC<Props> = ({ nav }) => {
  const { pathname } = useLocation();
  const userId = useAppSelector(selectUser)!.user_id;

  const isCurrentPath = pathname.startsWith(typeof nav.path === 'function' ? nav.path(userId) : nav.path);
  const isActive = isCurrentPath ? 'bg-primary text-white' : '';

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
