import React, { FC } from 'react';

export const ErrorMessage: FC<{ error?: string }> = ({ error }) => {
  return <small className='text-primary'>{error}</small>;
};
