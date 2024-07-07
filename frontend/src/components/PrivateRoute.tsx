import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectIsAuth } from '@/state/selectors';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { privateInstance } from '@/api/agent';

export const PrivateRoute = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth) {
        return;
      }
      try {
        await privateInstance.get('/auth/refresh');
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, [isAuth, location, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
