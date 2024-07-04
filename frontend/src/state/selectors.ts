import { RootState } from './hooks';

export const selectProperty = (state: RootState) => state.property.property;
export const selectListings = (state: RootState) => state.listings.listings;
export const selectUser = (state: RootState) => state.auth.user;
