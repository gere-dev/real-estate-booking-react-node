import { AccountContainer, PropertyForm } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectProperty, selectPropertyStatus, fetchPropertyById } from '@/state';
import { Status } from '@/types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const EditListings = () => {
  const { propertyId } = useParams();

  const dispatch = useAppDispatch();
  const property = useAppSelector(selectProperty);
  const propertyStatus = useAppSelector(selectPropertyStatus);
  const initialState = {
    ...property,
    images_to_delete: [],
  };

  useEffect(() => {
    dispatch(fetchPropertyById(Number(propertyId)));
    window.scrollTo(0, 0);
  }, [propertyId, dispatch]);

  if (!propertyId) {
    return <div>Property not found</div>;
  }
  if (propertyStatus === Status.LOADING) {
    return <div>Loading...</div>;
  }
  return (
    <AccountContainer>
      <PropertyForm isEditing={true} initialFormData={initialState} />
    </AccountContainer>
  );
};
