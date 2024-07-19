import { RootState } from '@/types';

export const selectBookings = (state: RootState) => state.bookings.bookings;
export const selectBookingsStatus = (state: RootState) => state.bookings.status;
