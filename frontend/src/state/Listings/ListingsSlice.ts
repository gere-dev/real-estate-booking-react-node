import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Property } from '@/types';
import { createListings, deleteListings, fetchListings, updateListings } from './listingsThunks';

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
      })

      // update user listing
      .addCase(updateListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateListings.fulfilled, (state, action: PayloadAction<Property>) => {
        state.status = 'succeeded';
        state.listings = state.listings.map((listing) => (listing.property_id === action.payload.property_id ? action.payload : listing));
      })
      .addCase(updateListings.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })

      // delete user listing
      .addCase(deleteListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteListings.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.listings = state.listings.filter((listing) => listing.property_id !== action.payload);
      })
      .addCase(deleteListings.rejected, (state, action: PayloadAction<unknown>) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});
