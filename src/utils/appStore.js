import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // ✅ name of the slice
  },
});

export default appStore;
