import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {

    if (existing.quantity >= product.stock) {
      return;
    }}

      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;

      state.items = state.items.filter((item) => item.id !== product.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    addAllToCart: (state, action) => {
      const itemsWithQuantity = action.payload.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      state.items.push(...itemsWithQuantity);
    },
   incrementQuantity: (state, action) => {
  const { id, stock } = action.payload;

  const item = state.items.find((i) => i.id === id);

  if (item && item.quantity < stock) {
    item.quantity += 1;
  }
},
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addAllToCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
