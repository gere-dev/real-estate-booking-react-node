import { RootState } from '../hooks';

export const selectFilteredProperties = (state: RootState) => state.filteredProperties.properties;
