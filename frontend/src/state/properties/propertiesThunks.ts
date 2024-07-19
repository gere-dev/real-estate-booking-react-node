import agent from '@/api/agent';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProperties = createAsyncThunk<Property[], void, { rejectValue: string }>(
  'properties/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const data = await agent.Properties.list();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
