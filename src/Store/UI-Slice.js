import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleCartButton: (state) => {
      state.cartIsShown = !state.cartIsShown;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
