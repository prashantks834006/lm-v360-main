import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import metaDataReducer from './slices/uiMetaDataSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    metaData: metaDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
