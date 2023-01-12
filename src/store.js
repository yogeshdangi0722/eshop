import { configureStore } from "@reduxjs/toolkit";
import fetchProduct from "./features/getData";
import cartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
       fetchProduct,
       cartSlice
    },
  });