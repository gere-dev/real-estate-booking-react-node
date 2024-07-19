import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { Register as RegisterType, AuthFormErrors } from '@/types';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { validateRegisterForm } from '@/utils';
import { register } from '@/state';
import { COMPONENTS_DATA } from '@/constants';
export const Register = () => {
  const [formData, setFormData] = useState<RegisterType>({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<AuthFormErrors>();

  const { loginPage, registerPage } = COMPONENTS_DATA;

  const dispatch = useAppDispatch();

  // Handles form submission for user registration.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data before dispatching registration action.
    const validateErrors = validateRegisterForm(formData);
    if (Object.keys(validateErrors).length === 0) {
      dispatch(register(formData));
    } else {
      setErrors(validateErrors);
    }
  };

  // Updates form data in response to user input changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <AuthContainer>
      <Title title={registerPage.title} />
      <AuthForm onChange={handleChange} onSubmit={handleSubmit} />
      <AuthMessageLink to={loginPage.link} linkText={loginPage.title} message={loginPage.message} />
    </AuthContainer>
  );
};
