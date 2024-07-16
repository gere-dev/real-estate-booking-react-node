import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchPropertyById } from '@/state/property/propertySlice';
import { selectProperty } from '@/state/selectors';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PropertyImages, PropertyHeader, PropertyDescription } from '@/components';
import BookingForm from '../Forms/BookingForm/BookingForm';

export const Property = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const property = useAppSelector(selectProperty);

  useEffect(() => {
    dispatch(fetchPropertyById(Number(id)));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <section className='max-width-container mt-8'>
      <PropertyHeader city={property.city} state={property.state} title={property.title} />
      <PropertyImages images={property.images} />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] mt-4'>
        <PropertyDescription property={property} />
        <BookingForm price={property.price_per_night} propertyId={property.property_id} bed={property.bed} />
      </div>
    </section>
  );
};
