import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";



export const store = configureStore({
 reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);