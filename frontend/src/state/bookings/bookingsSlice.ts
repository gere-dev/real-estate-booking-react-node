import { createSlice } from '@reduxjs/toolkit';
import { Booking, Status } from '@/types';
import { createBooking, deleteBooking, getAllBookings } from './bookingsThunks';

type BookingsState = {
  bookings: Booking[];
  status: Status;
  error: string | null;
};

const initialState: BookingsState = {
  bookings: [],
  status: Status.IDLE,
  error: null,
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookings.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.bookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload as string;
      })
      // create booking
      .addCase(createBooking.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload as string;
      })
      // delete booking
      .addCase(deleteBooking.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.bookings = state.bookings.filter((booking) => booking.booking_id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.payload as string;
      });
  },
});
