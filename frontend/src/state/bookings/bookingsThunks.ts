import agent from '@/api/agent';
import { Booking, CreateBooking } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const createBooking = createAsyncThunk<Booking, CreateBooking, { rejectValue: string }>(
  'bookings/createBooking',
  async (booking, { rejectWithValue }) => {
    try {
      const data = await agent.Bookings.create(booking);
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while creating booking');
      }
    }
  }
);

export const deleteBooking = createAsyncThunk<number, number, { rejectValue: string }>(
  'bookings/deleteBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      await agent.Bookings.delete(bookingId);
      return bookingId;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while deleting booking');
      }
    }
  }
);
