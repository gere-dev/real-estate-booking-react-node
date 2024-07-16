import React from 'react';

interface Props {
  label: string;
  htmlFor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  min?: string;
}
export const BookingDateInput: React.FC<Props> = ({ label, htmlFor, onChange, className, value, min }) => {
  return (
    <div className={`flex flex-col font-bold flex-1 p-2  ${className}`}>
      <label className='text-sm' htmlFor={htmlFor}>
        {label}
      </label>
      <input min={min} value={value} name={htmlFor} onChange={onChange} id={htmlFor} className='font-normal text-sm outline-none' type='date' />
    </div>
  );
};
