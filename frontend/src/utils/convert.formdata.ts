import { NewProperty, Property } from '@/types';

export const convertToFormData = (formData: NewProperty | Property) => {
  const formDataToSend = new FormData();
  // const formDataToSend = new FormData();
  // Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));
  // dispatch(createListing(formDataToSend as NewProperty));
  // console.log(formDataToSend);
  // setFormData(initialFormData);

  // Append non-file fields to FormData
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== 'images') {
      formDataToSend.append(key, value.toString()); // Convert non-string values to string
    }
  });

  // Append images to FormData
  formData.images.forEach((image, index) => {
    if (typeof image === 'string') {
      // If it's a URL (already uploaded image), append as is
      formDataToSend.append(`image_${index}`, image);
    } else {
      // If it's a File object (newly selected image), append with a unique key
      formDataToSend.append(`image_${index}`, image);
    }
  });

  return formDataToSend;
};
