import { RootState } from './hooks';

export const selectProperty = (state: RootState) => state.property.property;
export const selectListings = (state: RootState) => state.listings.listings;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.status;

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
