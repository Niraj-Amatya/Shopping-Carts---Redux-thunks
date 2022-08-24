import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // * add item *//
    add(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      state.totalQuantity = state.totalQuantity + 1;
      if (!existingItem) {
        const newItem = {
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
          totalPrice: action.payload.price,
          quantity: 1,
        };
        state.items.push(newItem);
      } else {
        existingItem.totalPrice =
          existingItem.totalPrice + action.payload.price;
        existingItem.quantity = existingItem.quantity + 1;
      }
    },

    // remove item
    remove: (state, action) => {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      // removing items that has quantity only one
      if (existingItem.quantity === 1) {
        const updatedItems = state.items.filter((item) => item.id !== id);
        state.items = updatedItems;
        // anything else should update quantity and price
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
