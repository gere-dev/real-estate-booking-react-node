import React from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { UploadImageInput } from './UploadImagesInput';

export const PropertyForm = () => {
  return (
    <form className='flex-1 flex gap-4 flex-col' action=''>
      <Input label='Title' description='Title for your place, should be short and catchy as in advertisement' />

      <Input label='address' description='Address to this place' />
      <Input label='city' description='City where the place is located' />
      <Input label='province/state' description='Province/State where the place is located' />
      <UploadImageInput />
      <TextArea label='Description' description='Description of the place.' />
      <TextArea label='Extra info' description='Extra information about the property' />
    </form>
  );
};
