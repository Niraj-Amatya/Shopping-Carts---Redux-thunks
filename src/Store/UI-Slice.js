import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleCartButton: (state) => {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification: (state, action) => {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
