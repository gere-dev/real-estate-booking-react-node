import { agent } from '@/api';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPropertyById = createAsyncThunk<Property, number, { rejectValue: string }>(
  'property/fetchPropertyById',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await agent.Properties.getById(id);
      return data;
    } catch (error) {
      console.log((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);
