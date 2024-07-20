import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { privateInstance } from '@/api';
import { selectIsAuth } from '@/state/auth/authSelectors';
import { logout } from '@/state/auth/authThunks';

export const PrivateRoute = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth) {
        dispatch(logout());
        return;
      }
      try {
        await privateInstance.get('/auth/private');
      } catch (error) {
        console.log(error);
        dispatch(logout());
        return;
      }
    };

    checkAuth();
  }, [isAuth, location, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
