import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import AuthProvider from '@/components/AuthProvider';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { useRedirect } from '@/hooks';
import { login } from '@/state/auth/authSlice';
import { RootState, useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectAuthStatus, selectIsAuth, selectUser } from '@/state/selectors';
import { AuthForm as AuthFormType, Login as LoginType, Status } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });

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
    dispatch(login(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <AuthProvider>
      <AuthContainer>
        <Title title={AuthFormEnum.LOGIN} />
        <AuthForm formType={AuthFormEnum.LOGIN} onSubmit={handleSubmit} onChange={handleChange} />
        <AuthMessageLink
          to={authMessageLinkProps.REGISTER_LINK}
          linkText={authMessageLinkProps.REGISTER_LINK}
          message={authMessageLinkProps.REGISTER_MESSAGE}
        />
      </AuthContainer>
    </AuthProvider>
  );
};
