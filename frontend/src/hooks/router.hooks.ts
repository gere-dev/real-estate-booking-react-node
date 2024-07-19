import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();
  const redirectToPreviousPage = () => {
    const referer = document.referrer;

    if (referer && !['/login', '/register'].includes(referer)) {
      navigate(referer);
    } else {
      navigate('/'); // Redirect to home page if no valid referer
    }
  };

  return { redirectToPreviousPage };
};
