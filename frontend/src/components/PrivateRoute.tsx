import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { requests } from '@/api';
import { logout, selectIsAuth } from '@/state';

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
        await requests.Auth.private();
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
