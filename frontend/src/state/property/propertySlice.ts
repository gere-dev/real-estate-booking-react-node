import agent from '@/api/agent';
import { Property } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPropertyById } from './propertyThunks';

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
