import { requests } from '@/api';
import { Property, Status } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPropertyById } from './propertyThunks';

interface PropertyState {
  property: Property;
  status: Status;
  error: string | null;
}

const initialState: PropertyState = {
  property: {} as Property,
  status: Status.IDLE,
  error: null,
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyById.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.property = action.payload;
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.property = {} as Property;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});
