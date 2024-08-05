import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { Register as RegisterType, AuthFormErrors, Status } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { validateRegisterForm } from '@/utils';
import { register, selectAuthStatus } from '@/state';
import { COMPONENTS_DATA } from '@/constants';
export const Register = () => {
  //State
  const [formData, setFormData] = useState<RegisterType>({
    name: '',
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

  // Handles form submission for user registration.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data before dispatching registration action.
    const validateErrors = validateRegisterForm(formData);
    if (Object.keys(validateErrors).length === 0) {
      dispatch(register(formData));
    } else {
      setErrors(validateErrors);
    }
  };

  // Updates form data in response to user input changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <AuthContainer>
      <Title title={registerPage.title} />
      <AuthForm onChange={handleChange} onSubmit={handleSubmit} />
      <AuthMessageLink to={loginPage.link} linkText={loginPage.title} message={loginPage.message} />
    </AuthContainer>
  );
};
