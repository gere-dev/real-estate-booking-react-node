import agent from '@/api/agent';
import { Login, Register, User } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk<{ user: User; accessToken: string }, Register, { rejectValue: string }>(
  'auth/register',
  async (user: Register, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.register(user);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const login = createAsyncThunk<{ user: User; accessToken: string }, Login, { rejectValue: string }>(
  'auth/login',
  async (user: Login, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.login(user);
      return data;
    } catch (error) {
      console.log(`Error at login controller: ${error}`);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logout = createAsyncThunk<void, void, { rejectValue: string }>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await agent.Auth.logout();
  } catch (error) {
    console.log(`Error at logout controller: ${error}`);
    return rejectWithValue((error as Error).message);
  }
});
