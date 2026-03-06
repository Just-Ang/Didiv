import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";
import persistReducer from 'redux-persist/es/persistReducer';


import storage from 'redux-persist/lib/storage'; 

const cartPersistConfig = {
  key: 'cart',
  storage,
};

// Конфіг для favorites
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
reducer: {
    cart: persistedCartReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);