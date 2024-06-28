import agent from '@/api/agent';
import { Property } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

interface PropertyState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  properties: Property[];
  error: string | null;
}

const initialState: PropertyState = {
  status: 'idle',
  properties: [],
  error: null,
};
export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default propertySlice.reducer;
