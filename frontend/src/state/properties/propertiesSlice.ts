import { Property } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchProperties } from './propertiesThunks';

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
export const propertiesSlice = createSlice({
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

export default propertiesSlice.reducer;
