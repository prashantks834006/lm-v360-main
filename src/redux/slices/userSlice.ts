import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginUserPayload, User } from '../../types/user';

export interface UserState {
  token: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user?: User;
}

const initialState: UserState = {
  token: '',
  isAuthenticated: false,
  isInitialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginUserPayload>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isInitialized = true;
      state.user = action.payload.user;
    },
    logoutUser: (state) => {
      state.token = '';
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
