import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      // here we can not call API (isslye seedha data daal rahe hai)
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loaduser } = userSlice.actions;

// loadcart function initialstate ki carts k data ko change krega
// reducer sync data ko hold kr skta hai async ko ni kr skta hai
