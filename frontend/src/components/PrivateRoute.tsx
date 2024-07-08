import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectIsAuth } from '@/state/selectors';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { privateInstance } from '@/api/agent';
import { logout } from '@/state/auth/authSlice';

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
        await privateInstance.get('/auth/private-route');
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
