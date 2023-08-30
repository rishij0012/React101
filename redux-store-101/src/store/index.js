import {createStore} from "redux";

const INIT_COUNTER = {
  counter: 0,
};

const counterReducer = (preState, action) => {
  if (action.type === "increment") {
    return {
      counter: preState.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: preState - 1,
    };
  }

  return INIT_COUNTER;
};

const counterStore = createStore(counterReducer);

export default counterStore;
