import { AuthForm, AuthMessageLink, Title, AuthContainer, AuthProvider } from '@/components';
import { selectAuthStatus, login } from '@/state';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthFormErrors, Login as LoginType, Status } from '@/types';
import { validateLoginForm } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPONENTS_DATA } from '@/constants';

export const Login = () => {
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<AuthFormErrors>();

  const { loginPage, registerPage } = COMPONENTS_DATA;

  const dispatch = useAppDispatch();
  const status = useAppSelector(selectAuthStatus);
  const navigate = useNavigate();

  const intendedDestination = sessionStorage.getItem('intendedDestination');

  useEffect(() => {
    if (status === Status.SUCCEEDED) {
      navigate(intendedDestination || '/');
      sessionStorage.removeItem('intendedDestination');
    }
  }, [status, navigate, intendedDestination]);

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
    <AuthProvider>
      <AuthContainer>
        <Title title={loginPage.title} />
        <AuthForm onSubmit={handleSubmit} onChange={handleChange} />
        <AuthMessageLink to={registerPage.link} linkText={registerPage.title} message={registerPage.message} />
      </AuthContainer>
    </AuthProvider>
  );
};
