import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user';

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
  reducers: {},
});

export const { actions } = userSlice;
export default userSlice.reducer;
