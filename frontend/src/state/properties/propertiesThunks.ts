import { requests } from '@/api';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

export const fetchProperties = createAsyncThunk<Property[], void, { rejectValue: string }>(
  'properties/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requests.Properties.list();
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while creating booking');
      }
    }
  }
);
