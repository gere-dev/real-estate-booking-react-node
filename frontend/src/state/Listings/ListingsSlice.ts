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

export const createListings = createAsyncThunk<Property, FormData, { rejectValue: unknown }>(
  'createListings/listings',
  async (listing, { rejectWithValue }) => {
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

export const updateListings = createAsyncThunk<Property, { property: FormData; propertyId: number }, { rejectValue: unknown }>(
  'updateListings/listings',
  async ({ property, propertyId }, { rejectWithValue }) => {
    try {
      const data = await agent.Listings.update(property, propertyId);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Unknown error occurred while updating listing' });
      }
    }
  }
);

export const deleteListings = createAsyncThunk<number, number, { rejectValue: unknown }>(
  'deleteListings/listings',
  async (propertyId, { rejectWithValue }) => {
    try {
      await agent.Listings.delete(propertyId);
      return propertyId;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Unknown error occurred while deleting listing' });
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

export default listingsSlice.reducer;
