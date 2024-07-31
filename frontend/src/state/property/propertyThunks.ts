import { requests } from '@/api';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

export const fetchPropertyById = createAsyncThunk<Property, number, { rejectValue: string }>(
  'property/fetchPropertyById',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await requests.Properties.getById(id);
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
