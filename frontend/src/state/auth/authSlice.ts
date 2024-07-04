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

export const register = createAsyncThunk<{ user: User; token: string }, Register, { rejectValue: string }>(
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

export const login = createAsyncThunk<{ user: User; token: string }, Login, { rejectValue: string }>(
  'auth/login',
  async (user: Login, { rejectWithValue }) => {
    try {
      const data = await agent.Auth.login(user);
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logout = createAsyncThunk<void, { RejectValue: string }>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await agent.Auth.logout();
  } catch (error) {
    console.log(`Error at logout controller: ${error}`);
    return rejectWithValue((error as Error).message);
  }
});

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
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
        state.token = null;
      });
  },
});
