import { PropertiesHeader, PropertiesGrid, Loading } from '@/components';
import { fetchProperties, selectProperties, selectPropertiesStatus } from '@/state';
import { useFetchData } from '@/hooks';
import { Status } from '@/types';

export const Properties = () => {
  const { data, status } = useFetchData(fetchProperties(), selectProperties, selectPropertiesStatus);

  // display a spinner while loading
  if (status === Status.LOADING) {
    return <Loading />;
  }
  return (
    <section className='max-width-container my-8'>
      <PropertiesHeader />
      <PropertiesGrid properties={data} />
    </section>
  );
};
