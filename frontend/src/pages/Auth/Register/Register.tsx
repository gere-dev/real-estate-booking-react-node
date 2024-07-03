import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { Register as RegisterType, Login } from '@/types';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { useState } from 'react';
export const Register = () => {
  const [formData, setFormData] = useState<RegisterType>({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <AuthContainer>
      <Title title={AuthFormEnum.REGISTER} />
      <AuthForm onChange={handleChange} formType={AuthFormEnum.REGISTER} onSubmit={handleSubmit} />
      <AuthMessageLink
        to={authMessageLinkProps.LOGIN_LINK}
        linkText={authMessageLinkProps.LOGIN_TITLE}
        message={authMessageLinkProps.LOGIN_MESSAGE}
      />
    </AuthContainer>
  );
};
