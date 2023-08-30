import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import counterStore from "../store";

const Counter = () => {
  // also set the subcription for the component : useSelector helps in dom manipulation of the latest changes in the value
  const counter = useSelector((state) => state.counter); // function should return the object
  const counterDispatcher = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    counterDispatcher({ type: "increment" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
