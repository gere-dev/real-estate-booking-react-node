import { AuthForm } from '@/components';
import { Title } from '../Title';
import { FormType } from '@/components/Form/AuthForm/enums';
import { FormData } from '@/components/Form/AuthForm/types';

export const Register = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section className='flex flex-col '>
      <Title title={FormType.REGISTER} />
      <AuthForm formType={FormType.REGISTER} buttonText={FormType.REGISTER} onSubmit={handleSubmit} />
    </section>
  );
};
