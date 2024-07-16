import { RootState } from './hooks';

// Properties Selectors
export const selectProperty = (state: RootState) => state.property.property;
export const selectPropertyStatus = (state: RootState) => state.property.status;
export const selectFilteredProperties = (state: RootState) => state.filteredProperties.properties;

export const selectListings = (state: RootState) => state.listings.listings;
export const selectListingsStatus = (state: RootState) => state.listings.status;

// Bookings Selectors
export const selectBookings = (state: RootState) => state.bookings.bookings;
export const selectBookingsStatus = (state: RootState) => state.bookings.status;

// Auth Selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
