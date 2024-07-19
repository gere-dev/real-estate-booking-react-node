import { PropertiesHeader, PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties, selectProperties } from '@/state';
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
