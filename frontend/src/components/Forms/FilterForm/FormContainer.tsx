import React from 'react';

export const FormContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <form className='flex flex-col gap-4 lg:flex-row lg:items-center lg:shadow-lg lg:-mt-16 rounded-full py-2 lg:px-8 z-10 lg:h-fit bg-white'>
      {children}
    </form>
  );
};
