import { AccountContainer, PropertyForm } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { fetchPropertyById } from '@/state/property/propertySlice';
import { selectProperty } from '@/state/selectors';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const EditListings = () => {
  const { propertyId } = useParams();
  const dispatch = useAppDispatch();
  const property = useAppSelector(selectProperty);

  useEffect(() => {
    dispatch(fetchPropertyById(Number(propertyId)));
  }, [propertyId, dispatch]);

  if (!propertyId) {
    return <div>Property not found</div>;
  }
  return (
    <AccountContainer>
      <PropertyForm initialFormData={property} />
    </AccountContainer>
  );
};
