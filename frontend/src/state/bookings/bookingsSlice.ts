import agent from '@/api/agent';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Booking, Status } from '@/types';
import { isAxiosError } from 'axios';
export const getAllBookings = createAsyncThunk<Booking[], void, { rejectValue: string }>(
  'bookings/getAllBookings',
  async (_, { rejectWithValue }) => {
    try {
      const data = await agent.Bookings.list();
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while fetching bookings');
      }
    }
  }
);

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
      });
  },
});

export default bookingsSlice.reducer;
