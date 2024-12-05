import { configureStore } from '@reduxjs/toolkit';
import { currentKeySlice } from './currentKeySlice';

export const store = configureStore({
  reducer: {
    currentKey: currentKeySlice.reducer,
  },
});
