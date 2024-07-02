import React from 'react';

interface Props {
  title: string;
  city: string;
  state: string;
}
export const PropertyHeader: React.FC<Props> = ({ title, city, state }) => {
  return (
    <div>
      <h2 className='font-semibold text-xl text-gray-600 capitalize'>{title}</h2>
      <span className='text-sm capitalize underline font-semibold'>{`${city}, ${state}`}</span>
    </div>
  );
};
