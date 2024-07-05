import { PROPERTY_CHECKBOX_OPTIONS } from '@/constants';
import React from 'react';
import { CheckBoxList } from './PropertyCheckBoxList';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const PropertyCheckBoxContainer = ({ handleChange }: Props) => {
  return (
    <div>
      <h2 className='text-semibold text-gray-700'>Utils</h2>
      <small className='text-gray-400'> Select all the options that apply</small>

      <div className='grid grid-cols-2 gap-4'>
        {PROPERTY_CHECKBOX_OPTIONS.map(({ label, icon, name }) => (
          <CheckBoxList name={name} onChange={handleChange} key={label} label={label} icon={icon} />
        ))}
      </div>
    </div>
  );
};
