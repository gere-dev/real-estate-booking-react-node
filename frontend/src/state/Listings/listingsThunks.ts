import { requests, privateInstance } from '@/api';
import { Property } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const formHeader = {
  'Content-Type': 'multipart/form-data',
};
export const fetchListings = createAsyncThunk<Array<Property>, void, { rejectValue: unknown }>(
  'fetchListings/listings',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requests.Listings.list();
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
      const data = await requests.Listings.create(listing, formHeader);
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
      const data = await requests.Listings.update(property, propertyId);
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
      await requests.Listings.delete(propertyId);
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
