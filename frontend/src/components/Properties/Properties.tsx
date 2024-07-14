import { PropertiesHeader, PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties } from '@/state/properties/propertiesSlice';
import { selectProperties } from '@/state/properties/selectors';
import { useEffect } from 'react';

export const Properties = () => {
  const properties = useAppSelector(selectProperties);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <section className='max-width-container my-8'>
      <PropertiesHeader />
      <PropertiesGrid properties={properties} />
    </section>
  );
};
