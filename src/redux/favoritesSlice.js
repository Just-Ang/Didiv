import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
   toggleFavorite: (state, action) => {
  const product = action.payload; // Приходить весь об'єкт {id, name, price, ...}
  
  // Шукаємо, чи є вже такий товар у масиві (порівнюємо id)
  const exists = state.items.find(item => item.id === product.id);

  if (exists) {
    // Якщо є — видаляємо його з масиву (залишаємо всі, крім цього id)
    state.items = state.items.filter(item => item.id !== product.id);
  } else {
    // Якщо немає — додаємо весь об'єкт у масив
    state.items.push(product);
  }
},
clearFavorite: (state) => {
  state.items = []

}
  },
});

export const { toggleFavorite, clearFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
