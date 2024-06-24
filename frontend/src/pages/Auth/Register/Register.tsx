import { AuthForm, AuthMessageLink, Title } from '@/components';
import { AuthForm as AuthFormType } from '@/types';
import { AuthForm as AuthFormEnum } from '@/enums';
import AuthContainer from '@/components/Auth/AuthContainer';
export const Register = () => {
  const handleSubmit = (data: AuthFormType) => {
    console.log(data);
  };
  return (
    <AuthContainer>
      <Title title={AuthFormEnum.REGISTER} />
      <AuthForm formType={AuthFormEnum.REGISTER} buttonText={AuthFormEnum.REGISTER} onSubmit={handleSubmit} />
      <AuthMessageLink to='login' linkText='login' message='Already have an account?' />
    </AuthContainer>
  );
};
