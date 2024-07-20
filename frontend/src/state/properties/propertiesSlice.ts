import { Property, Status } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchProperties } from './propertiesThunks';

interface PropertyState {
  status: Status;
  properties: Property[];
  error: string | null;
}

const initialState: PropertyState = {
  status: Status.IDLE,
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
        state.status = Status.LOADING;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = Status.FAILED;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});
