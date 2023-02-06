import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cardReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cardReducer,
  },
});
