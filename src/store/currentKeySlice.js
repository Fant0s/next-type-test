import { createSlice, configureStore } from '@reduxjs/toolkit';

export const currentKeySlice = createSlice({
  name: 'currentKey',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, newValue) => {
      state.value = newValue;
    },
    clearValue: (state) => {
      state.value = '';
    },
  },
});

export const { setValue, clearValue } = currentKeySlice.actions;
