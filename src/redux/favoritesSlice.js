import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
   toggleFavorite: (state, action) => {
  const id = action.payload;
  const exists = state.items.find(i => i === id);


  if (exists) {
    state.items = state.items.filter(i => i !== id);
  } else {
    state.items.push(id);
  }
}
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;