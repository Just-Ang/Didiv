import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
  const existing = state.items.find(item => item.id === action.payload.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }
},
    removeFromCart: (state, action) => {
      const product = action.payload;

  state.items = state.items.filter(item => item.id !== product.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    addAllToCart: (state, action) => {
      state.items.push(...action.payload);
    },
    incrementQuantity: (state, action) => {
  const item = state.items.find(i => i.id === action.payload);
  if (item) {
    item.quantity += 1;
  }
},
decrementQuantity: (state, action) => {
  const item = state.items.find(i => i.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }
},
  },
});

export const { addToCart, removeFromCart, clearCart, addAllToCart,incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;