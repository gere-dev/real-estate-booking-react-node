import { agent } from '@/api';
import { Login, Register, User } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

export const register = createAsyncThunk<{ user: User; accessToken: string }, Register, { rejectValue: string }>(
  'auth/register',
  async (user: Register, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.register(user);
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while registering a user');
      }
    }
  }
);

export const login = createAsyncThunk<{ user: User; accessToken: string }, Login, { rejectValue: string }>(
  'auth/login',
  async (user: Login, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.login(user);
      return data;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('Unknown error occurred while login in');
      }
    }
  }
);

export const logout = createAsyncThunk<void, void, { rejectValue: string }>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await agent.Auth.logout();
  } catch (error: unknown) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('Unknown error occurred while login out');
    }
  }
});
