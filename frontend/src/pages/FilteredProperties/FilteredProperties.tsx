import { PropertiesGrid } from '@/components';
import { selectFilteredProperties } from '@/state/filterProperties/filterPropertiesSelectors';
import { useAppSelector, useScrollTop } from '@/hooks';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const FilteredProperties = () => {
  const properties = useAppSelector(selectFilteredProperties);
  const navigate = useNavigate();

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
