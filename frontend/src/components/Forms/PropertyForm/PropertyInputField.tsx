import React, { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  description?: string;
}

export const PropertyInputField = ({ label, description, ...props }: InputProps) => {
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor={props.id} className='text-gray-600 capitalize'>
          {label}
        </label>
        <small className='text-gray-400'>{description}</small>
      </div>
      <input {...props} type={'text' || props.type} className='border px-2 py-2 rounded outline-none w-full' />
    </div>
  );
};
