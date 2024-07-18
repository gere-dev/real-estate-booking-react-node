import { AuthForm, AuthMessageLink, Title, AuthContainer } from '@/components';
import { Register as RegisterType, Login, AuthFormErrors } from '@/types';
import { AuthForm as AuthFormEnum, authMessageLinkProps } from '@/enums';
import { useState } from 'react';
import { useAppDispatch } from '@/state/hooks';
import { register } from '@/state/auth/authSlice';
import { validateRegisterForm } from '@/utils/validation';
export const Register = () => {
  const [formData, setFormData] = useState<RegisterType>({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<AuthFormErrors>();

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
      <Title title={AuthFormEnum.REGISTER} />
      <AuthForm onChange={handleChange} formType={AuthFormEnum.REGISTER} onSubmit={handleSubmit} />
      <AuthMessageLink
        to={authMessageLinkProps.LOGIN_LINK}
        linkText={authMessageLinkProps.LOGIN_TITLE}
        message={authMessageLinkProps.LOGIN_MESSAGE}
      />
    </AuthContainer>
  );
};
