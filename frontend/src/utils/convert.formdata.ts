import { NewProperty, Property } from '@/types';

export const convertToFormData = (formData: NewProperty | Property) => {
  const formDataToSend = new FormData();
  // Append images to FormData
  formData.images.forEach((image, index) => {
    formDataToSend.append('images', image);
  });

  // Append non-file fields to FormData
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== 'images') {
      formDataToSend.append(key, value.toString());
    }
  });

  return formDataToSend;
};
