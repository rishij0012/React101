import { configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

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



const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, // using map we can use multiple reducer function 
    auth: authSlice.reducer,
  }
});

export default store;
