import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart-items',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    cartOpen: false,
    userData: [],
  },
  reducers: {
    replaceData(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },

    addCartItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          gender: newItem.gender,
          totalPrice: newItem.price,
          image: newItem.image,
          title: newItem.title,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCartItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    clearItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.items = state.items.filter((items) => items.id !== id);
    },

    cartUi(state) {
      state.cartOpen = !state.cartOpen;
    },

    getUserData(state, action) {
      const data = action.payload;
      state.userData.push(data);
    },
  },
});

export default cartSlice;
export const cartSliceActions = cartSlice.actions;
