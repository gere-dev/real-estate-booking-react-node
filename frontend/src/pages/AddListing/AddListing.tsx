import { AccountContainer } from '@/components';
import { ComponentProps } from 'react';
import { MdCloudUpload } from 'react-icons/md';

export const AddListing = () => {
  return (
    <AccountContainer>
      <form className='flex-1 flex gap-4 flex-col' action=''>
        <Input type='text' label='Title' description='Title for your place, should be short and catchy as in advertisement' />

        <Input type='text' label='address' description='Address to this place' />
        <Input type='text' label='city' description='City where the place is located' />
        <Input type='text' label='province/state' description='Province/State where the place is located' />
        <UploadImageInput />
        <TextArea label='Description' description='Description of the place.' />
        <TextArea label='Extra info' description='Extra information about the property' />
      </form>
    </AccountContainer>
  );
};

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  description?: string;
}

const Input = ({ label, description, ...props }: InputProps) => {
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor={props.id} className='text-gray-600 capitalize'>
          {label}
        </label>
        <small className='text-gray-400'>{description}</small>
      </div>
      <input className='border px-2 py-2 rounded outline-none w-full' {...props} />
    </div>
  );
};

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  description?: string;
}
const TextArea = ({ label, description, ...props }: TextareaProps) => {
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor={props.id} className='text-gray-600 capitalize'>
          {label}
        </label>
        <small className='text-gray-400'>{description}</small>
      </div>
      <textarea {...props} className='border px-2 py-2 rounded outline-none w-full resize-none h-28' name='' id=''></textarea>
    </div>
  );
};

const UploadImageInput = () => {
  return (
    <label className='hover:cursor-pointer text-gray-500 h-28 border w-fit px-4 py-2 rounded flex items-center gap-2' htmlFor='upload'>
      <MdCloudUpload size={24} /> Upload
      <input className='hidden ' type='file' id='upload' />
    </label>
  );
};
