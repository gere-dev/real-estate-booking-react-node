import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchProperties } from '@/state/properties/propertiesSlice';
import { selectProperties } from '@/state/properties/selectors';
import { apiUrl } from '@/api/agent';
import { Link } from 'react-router-dom';

export const Properties = () => {
  const dispatch = useAppDispatch();

  const properties = useAppSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);
  console.log(apiUrl);

  return (
    <section className='max-width-container my-8'>
      <div>
        <h2 className='font-semibold text-3xl'>Our Best Locations</h2>
        <p>Plenty of locations to choose from that will make you feel at home!</p>
      </div>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {properties.map((property) => (
          <li key={property.property_id} className='flex flex-col gap-4'>
            <Link className='w-full' to={`property/${property.property_id}`}>
              <img
                className='rounded aspect-square object-cover w-full h-full'
                src={`${apiUrl}/uploads/${property?.images[0]}`}
                alt='property image'
              />
            </Link>
            <h3 className='font-semibold text-xl'>{property.title}</h3>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
