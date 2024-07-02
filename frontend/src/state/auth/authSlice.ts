import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from './types';
import agent from '@/api/agent';
import { Login } from '@/types';

interface AuthState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  status: 'idle',
  error: null,
  token: null,
  user: null,
};

export const register = createAsyncThunk<User, Login, { rejectValue: string }>('auth/login', async (user: User, { rejectWithValue }) => {
  try {
    const data = await agent.Auth.login(user);
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
