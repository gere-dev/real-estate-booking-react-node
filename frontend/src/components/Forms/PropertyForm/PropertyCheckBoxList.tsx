import React, { ComponentProps } from 'react';
import { IconType } from 'react-icons';

interface Props extends ComponentProps<'input'> {
  label?: string;
  description?: string;
  icon: IconType;
}
export const CheckBoxList = ({ label, icon: Icon, ...props }: Props) => {
  return (
    <label
      className='capitalize focus:outline-none focus:border-blue-500 flex items-center gap-2 text-sm text-gray-700  border rounded px-2 py-2 hover:cursor-pointer'
      htmlFor={props.id}
      aria-label={label}
    >
      <input {...props} className='w-4 h-4' id='wifi' type='checkbox' />
      <span className='flex items-center gap-1'>
        <Icon className='text-lg text-gray-400' />
        {label}
      </span>
    </label>
  );
};
