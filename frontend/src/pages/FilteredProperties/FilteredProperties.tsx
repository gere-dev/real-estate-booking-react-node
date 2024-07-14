import { PropertiesGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/state/hooks';

export const FilteredProperties = () => {
  const dispatch = useAppDispatch();

  return <PropertiesGrid />;
};
