import { AccountContainer, PropertyForm } from '@/components';
import { NewProperty } from '@/types';
import { useState } from 'react';

const initialFormData: NewProperty = {
  title: '',
  description: '',
  address: '',
  city: '',
  state: '',
  images: [],
  extraInfo: '',
  wifi: false,
  parking: false,
  pets: false,
  gym: false,
  pool: false,
  netflix: false,
  bed: 0,
  price_per_night: 0,
  user_id: 0,
};

export const AddListing = () => {
  const [formData, setFormData] = useState<NewProperty>(initialFormData);

  return (
    <AccountContainer>
      <PropertyForm initialFormData={initialFormData} />
    </AccountContainer>
  );
};
