import agent from '@/api/agent';
import { Property, Status } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
      return rejectWithValue((error as Error).message);
    }
  }
});

interface FilterPropertiesState {
  status: Status;
  properties: Property[];
  error: string | null;
}

const initialState: FilterPropertiesState = {
  status: Status.IDLE,
  properties: [],
  error: null,
};

export const filterPropertiesSlice = createSlice({
  name: 'filterProperties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterProperties.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(filterProperties.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.properties = action.payload;
      })
      .addCase(filterProperties.rejected, (state, action) => {
        state.status = Status.FAILED;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default filterPropertiesSlice.reducer;
