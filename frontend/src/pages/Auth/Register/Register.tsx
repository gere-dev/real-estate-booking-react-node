import { AuthForm, AuthMessageLink, Title } from '@/components';
import { AuthForm as AuthFormType } from '@/types';
import { AuthForm as AuthFormEnum } from '@/enums';
export const Register = () => {
  const handleSubmit = (data: AuthFormType) => {
    console.log(data);
  };
  return (
    <section className='flex flex-col'>
      <Title title={AuthFormEnum.REGISTER} />
      <AuthForm formType={AuthFormEnum.REGISTER} buttonText={AuthFormEnum.REGISTER} onSubmit={handleSubmit} />
      <AuthMessageLink to='login' linkText='login' message='Already have an account?' />
    </section>
  );
};
