import { RootState } from './hooks';

// Properties Selectors
export const selectProperty = (state: RootState) => state.property.property;
export const selectPropertyStatus = (state: RootState) => state.property.status;
export const selectFilteredProperties = (state: RootState) => state.filteredProperties.properties;

export const selectListings = (state: RootState) => state.listings.listings;
export const selectListingsStatus = (state: RootState) => state.listings.status;
