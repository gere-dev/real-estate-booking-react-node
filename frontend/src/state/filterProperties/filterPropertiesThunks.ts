import { agent } from '@/api';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

export const filterProperties = createAsyncThunk<
  Property[],
  { city: string; minPrice: number; maxPrice: number; bed: number | string },
  { rejectValue: string }
>('filterProperties/filterProperties', async (query, { rejectWithValue }) => {
  try {
    const data = await agent.Properties.filter(query);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('Unknown error occurred while filtering properties');
    }
  }
});
