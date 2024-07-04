import agent from '@/api/agent';
import { Property } from '@/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchListings = createAsyncThunk<Property[], void, { rejectValue: string }>('listings/fetchListings', async (_, { rejectWithValue }) => {
  try {
    const data = await agent.Listings.list();
    return data;
  } catch (error) {
    console.log((error as Error).message);
    return rejectWithValue((error as Error).message);
  }
});

type ListingsState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  listings: Property[];
  error: string | null;
};

const initialState: ListingsState = {
  status: 'idle',
  listings: [],
  error: null,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action: PayloadAction<Property[]>) => {
        state.status = 'succeeded';
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : 'Unknown error';
      });
  },
});

export default listingsSlice.reducer;
