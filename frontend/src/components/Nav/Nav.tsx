import React from 'react';
import { navs } from './navs';
import { Link, useNavigate } from 'react-router-dom';
import { NavList } from './NavList';
import { RiLoginCircleFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectIsAuth } from '@/state/auth/authSelectors';
import { logout } from '@/state/auth/authThunks';

export const Nav = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <header className='border-b'>
      <div className='flex justify-between items-center py-2 max-width-container'>
        <Link className='bg-primary text-white py-1 px-3 rounded-full' to={'/'}>
          B
        </Link>
        <nav>
          <ul className='flex gap-5  '>
            {navs.map((nav) => {
              return <NavList nav={nav} key={nav.title} />;
            })}
            <li className='flex hover:bg-primary hover:bg-opacity-40 rounded'>
              <button onClick={() => (isAuth ? dispatch(logout()) : navigate('/login'))} className='text-2xl text-primary px-2 py-2'>
                {isAuth ? <RiLogoutCircleRFill /> : <RiLoginCircleFill />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
