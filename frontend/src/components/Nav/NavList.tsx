import { IconType } from 'react-icons';

import { Link } from 'react-router-dom';
import { Main_Nav } from '@/types';
import { useAppSelector } from '@/hooks';
import { selectUser } from '@/state/auth/authSelectors';
interface Props {
  nav: Main_Nav;
}
export const NavList = ({ nav }: Props) => {
  const user = useAppSelector(selectUser);

  return (
    <li className='flex hover:bg-primary hover:bg-opacity-40 rounded'>
      <Link className=' text-primary px-2 py-2' to={nav.path === '/account' ? `/account/${user?.user_id}` : `${nav.path}`}>
        <IconComponent Icon={nav.icon!} />
      </Link>
    </li>
  );
};

const IconComponent = ({ Icon }: { Icon: IconType }) => {
  return <Icon className='text-2xl' />;
};
