import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { login } from '@/state/auth/authSlice';
import { RootState, useAppDispatch, useAppSelector } from '@/state/hooks';
import { AuthForm as AuthFormType, Login as LoginType, Status } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const nav = useNavigate();

  const authStatus = useAppSelector((state: RootState) => state.auth.status);

  useEffect(() => {
    if (authStatus === Status.SUCCEEDED) {
      nav(-1);
      console.log('succeeded');
    } else if (authStatus === Status.FAILED) {
      alert('Login Failed');
      console.log('failed');
    }
  }, [authStatus, nav]);

  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <AuthContainer>
      <Title title={AuthFormEnum.LOGIN} />
      <AuthForm formType={AuthFormEnum.LOGIN} onSubmit={handleSubmit} onChange={handleChange} />
      <AuthMessageLink
        to={authMessageLinkProps.REGISTER_LINK}
        linkText={authMessageLinkProps.REGISTER_LINK}
        message={authMessageLinkProps.REGISTER_MESSAGE}
      />
    </AuthContainer>
  );
};
