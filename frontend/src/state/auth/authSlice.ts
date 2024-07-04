import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterResponse, User } from './types';
import agent from '@/api/agent';
import { Login, Register } from '@/types';

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

export const register = createAsyncThunk<RegisterResponse, Register, { rejectValue: string }>(
  'auth/login',
  async (user: Register, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.register(user);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});
