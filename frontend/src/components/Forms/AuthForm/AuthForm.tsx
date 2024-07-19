import React from 'react';
import { InputField } from './InputField';
import { LoginFields, RegisterFields, COMPONENTS_DATA } from '@/constants';
import { RectangleButton } from '@/components';
import { useLocation, Location } from 'react-router-dom';
interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthForm: React.FC<Props> = ({ onSubmit, onChange }) => {
  const { pathname }: Location = useLocation();

  const { loginPage, registerPage } = COMPONENTS_DATA;

  const fields = pathname === registerPage.link ? RegisterFields : LoginFields;

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2 w-full max-w-xs ml-auto mr-auto'>
      {Object.values(fields).map((field) => (
        <InputField onChange={onChange} key={field} name={field} placeholder={field} type={field === 'password' ? 'password' : 'text'} required />
      ))}
      <RectangleButton type='submit' label={pathname === registerPage.link ? registerPage.title : loginPage.title} />
    </form>
  );
};
