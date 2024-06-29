import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties } from '@/state/properties/propertiesSlice';
import { selectProperties } from '@/state/properties/selectors';
import { PropertiesList, PropertiesHeader, PropertiesGrid } from '@/components';

export const Properties = () => {
  return (
    <section className='max-width-container my-8'>
      <PropertiesHeader />
      <PropertiesGrid />
    </section>
  );
};
