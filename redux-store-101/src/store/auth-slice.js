import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INIT_STATE,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
        state.isLoggedIn = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
