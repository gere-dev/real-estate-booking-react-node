import { RootState } from '@/types';

export const selectListings = (state: RootState) => state.listings.listings;
export const selectListingsStatus = (state: RootState) => state.listings.status;
