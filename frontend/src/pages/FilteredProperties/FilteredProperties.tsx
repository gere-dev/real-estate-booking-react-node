import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector, useScrollTop } from '@/hooks';
import { filterProperties, selectFilteredProperties } from '@/state';

export const FilteredProperties = () => {
  const properties = useAppSelector(selectFilteredProperties);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const city = params.get('city') || '';
    const minPrice = parseInt(params.get('minPrice') || '0', 10);
    const maxPrice = parseInt(params.get('maxPrice') || '0', 10);
    const bed = parseInt(params.get('bed') || '0', 10);

    const query = {
      city,
      minPrice,
      maxPrice,
      bed,
    };
    dispatch(filterProperties(query));
  }, [dispatch, search]);

  //scroll to the top when it mounts
  useScrollTop();

  return (
    <section className='max-width-container py-2'>
      <button onClick={() => navigate(-1)} className='text-2xl text-white bg-primary rounded-full p-1 my-3'>
        <BiArrowBack />
      </button>
      <PropertiesGrid properties={properties} />
    </section>
  );
};
