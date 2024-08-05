import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { selectAuthStatus, login } from '@/state';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthFormErrors, Login as LoginType, Status } from '@/types';
import { validateLoginForm } from '@/utils';
import { COMPONENTS_DATA } from '@/constants';

export const Login = () => {
  //State
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<AuthFormErrors>();

  //Constants
  const { loginPage, registerPage } = COMPONENTS_DATA;

  //Hooks
  const location = useLocation();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectAuthStatus);
  const navigate = useNavigate();

  // Redirect on successful login
  const from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (status === Status.SUCCEEDED) {
      const redirectTo = from === '/login' || from === '/register' ? '/' : from;
      navigate(redirectTo, { replace: true });
    }
  }, [status, navigate, from]);

  //Event Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(formData));
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AuthContainer>
        <Title title={loginPage.title} />
        <AuthForm onSubmit={handleSubmit} onChange={handleChange} />
        <AuthMessageLink to={registerPage.link} linkText={registerPage.title} message={registerPage.message} />
      </AuthContainer>
    </>
  );
};
