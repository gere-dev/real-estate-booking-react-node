import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '@/api/agent';
import axios from 'axios';
import { NewProperty, Property } from '@/types';

export const fetchListings = createAsyncThunk<Array<Property>, void, { rejectValue: unknown }>(
  'fetchListings/listings',
  async (_, { rejectWithValue }) => {
    try {
      const data = await agent.Listings.list();
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Unknown error occurred while fetching listings' });
      }
    }
  }
);

export const createListings = createAsyncThunk<Property, NewProperty, { rejectValue: unknown }>(
  'createListings/listings',
  async (listing: NewProperty, { rejectWithValue }) => {
    try {
      const data = await agent.Listings.create(listing);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Unknown error occurred while creating listing' });
      }
    }
  }
);

type listingsState = {
  listings: Property[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: listingsState = {
  listings: [],
  status: 'idle',
  error: null,
};

export const listingsSlice = createSlice({
  name: 'userListings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch user listings
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action: PayloadAction<Array<Property>>) => {
        state.status = 'succeeded';
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

      // create user listing
      .addCase(createListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createListings.fulfilled, (state, action: PayloadAction<Property>) => {
        state.status = 'succeeded';
        state.listings = [action.payload, ...state.listings];
      })
      .addCase(createListings.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default listingsSlice.reducer;
