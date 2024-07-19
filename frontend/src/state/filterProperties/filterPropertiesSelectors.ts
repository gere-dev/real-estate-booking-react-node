import { RootState } from '@/types';

export const selectFilteredProperties = (state: RootState) => state.filteredProperties.properties;
