const redux = require("redux");

const counterReducer = (preState, action) => {
  if (action.type === "increment") {
    return {
      counter: preState.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: preState.counter - 1,
    };
  }

  return { counter: 0 };
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(
    "🚀 ~ file: reduxDemo.js:13 ~ counterSubscriber ~ latestState:",
    latestState
  );
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
