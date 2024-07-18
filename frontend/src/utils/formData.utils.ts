import { Property, NewProperty, UpdateProperty } from '@/types';

export const convertToFormData = (formData: NewProperty | Property | UpdateProperty) => {
  const formDataToSend = new FormData();
  // Append images to FormData
  formData.images.forEach((image, index) => {
    formDataToSend.append('images', image);
  });

  if ('images_to_delete' in formData) {
    formData.images_to_delete.forEach((image, index) => {
      formDataToSend.append('images_to_delete[]', image);
    });
  }

  // Append non-file fields to FormData
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== 'images' && key !== 'images_to_delete') {
      formDataToSend.append(key, value.toString());
    }
  });

  return formDataToSend;
};
