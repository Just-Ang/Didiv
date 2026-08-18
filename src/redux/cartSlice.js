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
        (item) => item.id === product.id
      );

      if (existing) {
        if (existing.quantity >= product.stock) {
          return;
        }

        existing.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    setCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },

    removeFromCart: (state, action) => {
      const product = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== product.id
      );
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
    setCartItems: (state, action) => {
  state.items = action.payload;
},

    incrementQuantity: (state, action) => {
      const { id, stock } = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item && item.quantity < stock) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  setCartItems,
  addToCart,
  setCartItemQuantity,
  removeFromCart,
  clearCart,
  addAllToCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;