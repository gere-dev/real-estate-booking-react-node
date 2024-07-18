import { Login, Register, AuthFormErrors } from '@/types';

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateLoginForm = (formData: Login): AuthFormErrors => {
  const errors: AuthFormErrors = {};
  if (!formData.email) {
    errors.email = 'Email is required';
  }
  if (!pattern.test(formData.email)) {
    errors.email = 'Invalid email';
  }
  if (!formData.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

export const validateRegisterForm = (formData: Register): AuthFormErrors => {
  const errors: AuthFormErrors = {};
  if (!formData.name) {
    errors.name = 'Name is required';
  }
  if (!formData.email) {
    errors.email = 'Email is required';
  }
  if (!pattern.test(formData.email)) {
    errors.email = 'Invalid email';
  }
  if (!formData.password) {
    errors.password = 'Password is required';
  }
  return errors;
};
