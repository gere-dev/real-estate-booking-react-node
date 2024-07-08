import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '@/api/agent';
import { Login, Register, Status, User } from '@/types';

interface AuthState {
  status: Status;
  error: string | null;
  accessToken: string | null;
  isAuth: boolean;
  user: User | null;
}

const initialState: AuthState = {
  status: Status.IDLE,
  error: null,
  accessToken: null,
  isAuth: false,
  user: null,
};

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.user = action.payload.user;
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = Status.FAILED;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(login.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.user = action.payload.user;
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = Status.FAILED;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = Status.LOGGED_OUT;
        state.user = null;
        state.accessToken = null;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      });
  },
});

export default authSlice.reducer;
