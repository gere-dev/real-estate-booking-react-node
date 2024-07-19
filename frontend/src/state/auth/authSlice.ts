import { createSlice } from '@reduxjs/toolkit';
import { Status, User } from '@/types';
import { login, logout, register } from './authThunks';

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
