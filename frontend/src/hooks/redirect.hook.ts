import { RootState, useAppSelector } from '@/state/hooks';
import { Status } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();
  const redirectToPreviousPage = () => {
    const referer = document.referrer;

    // Define the logic for redirection based on referer or any other condition
    if (referer && !['/login', '/register'].includes(referer)) {
      navigate(referer);
    } else {
      navigate('/'); // Redirect to home page if no valid referer
    }
  };

  return { redirectToPreviousPage };
};
