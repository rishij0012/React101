import { createSlice, configureStore} from "@reduxjs/toolkit";

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
      }
    },
  },
});

// const counterReducer = (preState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...preState,
//       counter: preState.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...preState,
//       counter: preState.counter - 1,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...preState,
//       show: !preState.show,
//     };
//   }

//   return INIT_COUNTER;
// };

// const counterStore = createStore(counterReducer);
const counterStore = configureStore({
  reducer: { 
    counter: counterSlice.reducer, // using map we can use multiple reducer function 
  }
});

export const counterAction = counterSlice.actions;
export default counterStore;
