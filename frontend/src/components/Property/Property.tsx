import { useParams } from 'react-router-dom';
import { fetchPropertyById, selectPropertyStatus, selectProperty } from '@/state';
import { PropertyImages, PropertyHeader, PropertyDescription, BookingForm, Loading } from '@/components';
import { useFetchData, useScrollTop } from '@/hooks';
import { Status } from '@/types';

export const Property = () => {
  const { id } = useParams();

  const propertyId = Number(id);

  const { data: property, status } = useFetchData(fetchPropertyById(propertyId), selectProperty, selectPropertyStatus, [propertyId]);

  useScrollTop(); //  Scrolls to the top of the page on component mount

  // display a spinner while loading
  if (status === Status.LOADING) {
    return <Loading />;
  }

  return (
    <section className='max-width-container mt-8'>
      <PropertyHeader city={property.city} state={property.state} title={property.title} />
      <PropertyImages images={property.images} />
      <div className='grid grid-cols-1 gap-8 md:gap-2 sm:grid-cols-[2fr_1fr] mt-4'>
        <PropertyDescription property={property} />
        <BookingForm price={property.price_per_night} propertyId={property.property_id} bed={property.bed} />
      </div>
    </section>
  );
};
