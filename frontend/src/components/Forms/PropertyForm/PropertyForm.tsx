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
  extraInfo: string;
};

const initialFormData: FormType = {
  title: '',
  description: '',
  address: '',
  city: '',
  province: '',
  images: [],
  extraInfo: '',
};

export const PropertyForm = () => {
  const [formData, setFormData] = useState<FormType>(initialFormData);

  const onRemove = (index: number) => {
    setFormData({ ...formData, images: formData.images.filter((_, i) => i !== index) });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const files = (event.target as HTMLInputElement).files;

      if (files) {
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...Array.from(files)] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  console.log(formData);
  return (
    <form className='flex-1 flex gap-4 flex-col' action=''>
      <Input
        onChange={handleChange}
        name='title'
        value={formData.title}
        label='Title'
        description='Title for your place, should be short and catchy as in advertisement'
      />
      <Input onChange={handleChange} name='address' value={formData.address} label='address' description='Address to this place' />
      <Input onChange={handleChange} name='city' value={formData.city} label='city' description='City where the place is located' />
      <Input
        onChange={handleChange}
        name='province'
        value={formData.province}
        label='province/state'
        description='Province/State where the place is located'
      />
      <UploadPropertyImages onChange={handleChange} images={formData.images} onRemove={onRemove} />
      <TextArea onChange={handleChange} name='description' value={formData.description} label='Description' description='Description of the place.' />
      <TextArea
        onChange={handleChange}
        name='extraInfo'
        value={formData.extraInfo}
        label='Extra info'
        description='Extra information about the property'
      />
    </form>
  );
};
