import agent from '@/api/agent';
import { Property } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

interface PropertyState {
  property: Property;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PropertyState = {
  property: {} as Property,
  status: 'idle',
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.property = action.payload;
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.status = 'failed';
        state.property = {} as Property;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default propertySlice.reducer;
