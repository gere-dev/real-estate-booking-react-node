import { PropertiesHeader, PropertiesGrid } from '@/components';
import { fetchProperties, selectProperties, selectPropertiesStatus } from '@/state';
import { useFetchData } from '@/hooks';

export const Properties = () => {
  const { data, status } = useFetchData(fetchProperties(), selectProperties, selectPropertiesStatus);

  return (
    <section className='max-width-container my-8'>
      <PropertiesHeader />
      <PropertiesGrid properties={data} />
    </section>
  );
};
