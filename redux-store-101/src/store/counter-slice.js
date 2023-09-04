import { createSlice } from "@reduxjs/toolkit";

const INIT_COUNTER = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  initialState: INIT_COUNTER,
  name: "counter",
  reducers: {
    increment(state) {
      state.counter++; // here we can do this : here immer change this code to immutable existing state code
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state, action) {
      // state.show = !state.show;
      return {
        ...state,
        show: !state.show,
      };
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;