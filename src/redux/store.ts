// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/loginSlice';
import productReducer from './features/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});
