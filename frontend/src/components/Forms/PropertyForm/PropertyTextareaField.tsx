import { ErrorMessage } from '@/components/ErrorMessage';
import React, { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  description?: string;
  error?: string;
}
export const PropertyTextareaField = ({ label, description, ...props }: TextareaProps) => {
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor={props.id} className='text-gray-600 capitalize'>
          {label}
        </label>
        <small className='text-gray-400'>{description}</small>
      </div>
      <textarea {...props} className='border px-2 py-2 rounded outline-none w-full resize-none h-28'></textarea>
      <ErrorMessage error={props.error} />
    </div>
  );
};
