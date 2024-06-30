import React, { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { UploadPropertyImages } from '@/components';

type FormType = {
  title: string;
  description: string;
  address: string;
  city: string;
  province: string;
  images: File[];
};

const initialFormData: FormType = {
  title: '',
  description: '',
  address: '',
  city: '',
  province: '',
  images: [],
};

export const PropertyForm = () => {
  const [formData, setFormData] = useState<FormType>(initialFormData);

  const onRemove = (index: number) => {
    setFormData({ ...formData, images: formData.images.filter((_, i) => i !== index) });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const files = (event.target as HTMLInputElement).files;

      if (files) {
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
      }
    }
  };

  return (
    <form className='flex-1 flex gap-4 flex-col' action=''>
      <Input label='Title' description='Title for your place, should be short and catchy as in advertisement' />

      <Input label='address' description='Address to this place' />
      <Input label='city' description='City where the place is located' />
      <Input label='province/state' description='Province/State where the place is located' />
      <UploadPropertyImages onChange={handleChange} images={formData.images} onRemove={onRemove} />
      <TextArea label='Description' description='Description of the place.' />
      <TextArea label='Extra info' description='Extra information about the property' />
    </form>
  );
};
