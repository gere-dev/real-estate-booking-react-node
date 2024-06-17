import React from 'react';

interface Props {
  title: string;
}
export const Title = ({ title }: Props) => {
  return <h2 className='font-semibold text-2xl text-center'>{title}</h2>;
};
