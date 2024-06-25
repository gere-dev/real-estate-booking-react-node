import React, { ComponentProps } from 'react';

export const InputField = ({ ...props }: ComponentProps<'input'>) => {
  return <input className='border px-2 py-2 rounded outline-none' type='text' {...props} />;
};
