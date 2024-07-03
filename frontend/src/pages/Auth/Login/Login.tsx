import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { AuthForm as AuthFormType, Login as LoginType } from '@/types';
import { useState } from 'react';

export const Login = () => {
  const [formData, setFormData] = useState<LoginType>({
    email: '',
    password: '',
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);

    e.preventDefault();
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
