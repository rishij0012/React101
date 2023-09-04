import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterAction } from "../store/index";

const Counter = () => {
  // also set the subcription for the component : useSelector helps in dom manipulation of the latest changes in the value
  const counter = useSelector((state) => state.counter.counter); // function should return the object
  console.log("🚀 ~ file: Counter.js:9 ~ Counter ~ counter:", counter);

  const showCounter = useSelector((state) => {
    console.log("🚀 ~ file: Counter.js:11 ~ showCounter ~ state:", state)
    return state.counter.show;
  }); // function should return the object
  console.log("🚀 ~ file: Counter.js:10 ~ Counter ~ showCounter:", showCounter);
  
  const counterDispatcher = useDispatch();

  const toggleCounterHandler = () => {
    counterDispatcher(counterAction.toggle());
  };

  const incrementCounterHandler = () => {
    counterDispatcher(counterAction.increment());
  };

  const decrementCounterHandler = () => {
    counterDispatcher(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
