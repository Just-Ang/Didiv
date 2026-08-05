import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items.push(product);
      }
    },
    clearFavorite: (state) => {
      state.items = [];
    },
    setFavorites(state, action) {
  state.items = action.payload;
},

addFavorite(state, action) {
  state.items.push(action.payload);
},

removeFavorite(state, action) {
  state.items = state.items.filter(
    item => item.id !== action.payload
  );
}
  },
});

export const { toggleFavorite, clearFavorite, addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
