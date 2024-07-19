import { AuthForm, AuthMessageLink, Title, AuthContainer, AuthProvider } from '@/components';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { selectAuthStatus, login } from '@/state';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthForm as AuthFormType, AuthFormErrors, Login as LoginType, Status } from '@/types';
import { validateLoginForm } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<AuthFormErrors>();

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
