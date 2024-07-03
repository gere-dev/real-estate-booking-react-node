import React from 'react';
import { InputField } from './InputField';
import { AuthForm as AuthFormEnum } from '@/enums';
import { LoginFields, RegisterFields } from '@/constants';

interface Props {
  formType: AuthFormEnum;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthForm: React.FC<Props> = ({ formType, onSubmit, onChange }) => {
  const fields = formType === AuthFormEnum.REGISTER ? RegisterFields : LoginFields;
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2 w-full max-w-xs ml-auto mr-auto'>
      {Object.values(fields).map((field) => (
        <InputField onChange={onChange} key={field} name={field} placeholder={field} />
      ))}
      <button type='submit' className='bg-primary text-white py-2 px-3 rounded capitalize'>
        {formType === AuthFormEnum.REGISTER ? 'Register' : 'Login'}
      </button>
    </form>
  );
};
