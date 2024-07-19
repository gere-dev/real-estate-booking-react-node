import { RootState } from '../hooks';

export const selectListings = (state: RootState) => state.listings.listings;
export const selectListingsStatus = (state: RootState) => state.listings.status;
