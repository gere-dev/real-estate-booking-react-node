import { InputField } from '@/components/Input';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section className='flex flex-col '>
      <h2 className='font-semibold text-2xl text-center'>Login</h2>
      <form className='flex flex-col gap-2 w-full max-w-xs ml-auto mr-auto'>
        <InputField placeholder='Email' />
        <InputField placeholder='Password' />
        <button className='bg-primary text-white py-2 px-3 rounded'>Login</button>
        <small>
          Don't have an account yet?
          <Link to={'/register'} className='font-semibold underline underline-'>
            {' '}
            Register
          </Link>
        </small>
      </form>
    </section>
  );
};
