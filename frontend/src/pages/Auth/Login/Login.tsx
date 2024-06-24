import { AuthForm, AuthMessageLink, Title } from '@/components';
import AuthContainer from '@/components/Auth/AuthContainer';
import { AuthForm as AuthFormEnum } from '@/enums';
import { AuthForm as AuthFormType } from '@/types';

export const Login = () => {
  const handleSubmit = (data: AuthFormType) => {
    console.log(data);
  };
  return (
    <AuthContainer>
      <Title title='Login' />
      <AuthForm formType={AuthFormEnum.LOGIN} buttonText={AuthFormEnum.LOGIN} onSubmit={handleSubmit} />
      <AuthMessageLink to='Register' linkText='Register' message="Don't have an account account?" />
    </AuthContainer>
  );
};
