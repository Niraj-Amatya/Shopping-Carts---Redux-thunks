import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      state.totalQuantity = state.totalQuantity + 1;
      if (!existingItem) {
        const newItem = {
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
          description: action.payload.description,
          totalPrice: action.payload.price,
          quantity: action.payload.quantity,
        };
        state.items.push(newItem);
      } else {
        existingItem.totalPrice =
          existingItem.totalPrice + action.payload.price;
        existingItem.quantity = existingItem.quantity + 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
