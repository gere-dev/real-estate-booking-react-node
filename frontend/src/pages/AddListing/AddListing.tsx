import { AccountContainer, PropertyForm } from '@/components';
import { selectUser } from '@/state/auth/authSelectors';
import { useAppSelector } from '@/state/hooks';
import { NewProperty } from '@/types';

export const AddListing = () => {
  const user = useAppSelector(selectUser);

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
    user_id: user?.user_id || 0,
  };

  return (
    <AccountContainer>
      <PropertyForm initialFormData={initialFormData} />
    </AccountContainer>
  );
};
