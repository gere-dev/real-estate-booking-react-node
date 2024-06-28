import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties } from '@/state/properties/propertiesSlice';
import { selectProperties } from '@/state/properties/selectors';
import { PropertiesList } from '@/components';

export const Properties = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (!properties) {
    return <div>Loading...</div>;
  }

  return (
    <section className='max-width-container my-8'>
      <div>
        <h2 className='font-semibold text-3xl'>Our Best Locations</h2>
        <p>Plenty of locations to choose from that will make you feel at home!</p>
      </div>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-8'>
        {properties.map((property) => (
          <PropertiesList key={property.property_id} property={property} />
        ))}
      </ul>
    </section>
  );
};
