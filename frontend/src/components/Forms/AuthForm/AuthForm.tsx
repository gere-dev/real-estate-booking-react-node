import React, { useState } from 'react';
import { InputField } from './InputField';
import { AuthForm as AuthFormEnum } from '@/enums';
import { AuthForm as AuthFormType } from '@/types';
interface Props {
  formType: string;
  buttonText: string;
  onSubmit: (formData: AuthFormType) => void;
}

export const AuthForm = ({ formType, buttonText, onSubmit }: Props) => {
  const initialFormData: AuthFormType = formType === AuthFormEnum.REGISTER ? { name: '', email: '', password: '' } : { email: '', password: '' };

  const [formData, setFormData] = useState<AuthFormType>(initialFormData);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-xs ml-auto mr-auto'>
      {formType === AuthFormEnum.REGISTER && <InputField value={formData.name} onChange={handleChange} name='name' placeholder='Name' />}
      <InputField value={formData.email} onChange={handleChange} type='email' name='email' placeholder='Email' />
      <InputField value={formData.password} onChange={handleChange} name='password' type='password' placeholder='Password' />
      <button type='submit' className='bg-primary text-white py-2 px-3 rounded capitalize'>
        {buttonText}
      </button>
    </form>
  );
};
