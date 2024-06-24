import { AuthForm, AuthMessageLink } from '@/components';
import { Title } from '../Title';
import { FormType } from '@/components/Form/AuthForm/enums';
import { FormData } from '@/components/Form/AuthForm/types';

export const Login = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section className='flex flex-col '>
      <Title title='Login' />
      <AuthForm formType={FormType.LOGIN} buttonText={FormType.LOGIN} onSubmit={handleSubmit} />
      <AuthMessageLink to='Register' linkText='Register' message="Don't have an account account?" />
    </section>
  );
};
