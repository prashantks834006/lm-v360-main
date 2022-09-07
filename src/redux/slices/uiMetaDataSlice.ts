import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetaData } from '../../types/metaData';

export interface UiMetaDataSlice {
  data: MetaData[];
}

const initialState: UiMetaDataSlice = {
  data: [],
};

export const metaDataSlice = createSlice({
  name: 'metaData',
  initialState,
  reducers: {
    pushMetadata: (state: UiMetaDataSlice, action: PayloadAction<MetaData>) => {
      state.data.push(action.payload);
    },
  },
});

export const { pushMetadata } = metaDataSlice.actions;
export default metaDataSlice.reducer;
