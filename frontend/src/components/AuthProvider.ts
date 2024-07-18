import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Store the intended destination in session storage
    if (location.pathname !== '/login' && location.pathname !== '/register') {
      sessionStorage.setItem('intendedDestination', location.pathname);
    }
  }, [location]);

  return children;
};
