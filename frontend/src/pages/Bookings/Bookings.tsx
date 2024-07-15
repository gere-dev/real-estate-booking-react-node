import { ACCOUNT_NAV } from '@/constants';
import React, { useEffect } from 'react';
import { AccountContainer, AccountNav } from '../../components/Account';
import { PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { selectProperties } from '@/state/properties/selectors';
import { fetchProperties } from '@/state/properties/propertiesSlice';
// import { AccountNav } from '../Account';

export const Bookings = () => {
  const properties = useAppSelector(selectProperties);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <AccountContainer>
      <PropertiesGrid properties={properties} />
    </AccountContainer>
  );
};
