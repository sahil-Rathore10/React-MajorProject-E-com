import { configureStore } from "reduxjs.toolkit";

export const store = configureStore({
  reducer: {
    usersReducer: "",
    productReducer: "",
    cartReducer: "",
  },
});
