import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/productslice";

export const store = configureStore({
  reducer: {
    usersReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
