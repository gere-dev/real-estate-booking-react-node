import { Login, Register, AuthFormErrors, Property, NewProperty, PropertyErrors } from '@/types';

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

export const validatePropertyForm = (formData: Property | NewProperty): PropertyErrors => {
  const errors: PropertyErrors = {};
  if (!formData.title) {
    errors.title = 'Title is required';
  }
  if (!formData.address) {
    errors.address = 'Address is required';
  }
  if (!formData.city) {
    errors.city = 'City is required';
  }
  if (!formData.state) {
    errors.state = 'Province is required';
  }
  if (formData.images.length === 0) {
    errors.images = 'Images are required';
  }
  if (!formData.description) {
    errors.description = 'Description is required';
  }

  if (!formData.price_per_night) {
    errors.price_per_night = 'Price is required';
  }
  if (!formData.bed) {
    errors.bed = 'Bed is required';
  }
  return errors;
};
