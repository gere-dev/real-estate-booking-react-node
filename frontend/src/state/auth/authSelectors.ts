import { RootState } from '@/types';

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
