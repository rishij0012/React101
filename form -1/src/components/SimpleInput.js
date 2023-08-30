import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

function nameisValidHelper(name) {
  console.log("🚀 ~ file: SimpleInput.js:4 ~ nameisValidHelper ~ name:", name);
  name = name.trim();
  if (name.length) {
    return true;
  }
  return false;
}

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [onTouched, setOnTouched] = useState(false);
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const {
    enteredName,
    enteredNameIsValid,
    onBlurNameHandler,
    onChangeHandler,
    onTouched,
  } = useInput(nameInputIsInvalid);

  // useEffect(() => {
  //   console.log("🚀 ~ file: SimpleInput.js:23 ~ useEffect ~ useEffect:")
  //   if(enteredNameIsValid){
  //     console.log("i am valid input");
  //   }
  // } , [enteredNameIsValid]);

  // const onChangeHandler = (event) => {
  //   const value = event.target.value;
  //   setEnteredName(value);
  //   if (!nameisValidHelper(value)) {
  //     setEnteredNameIsValid(false);
  //   }
  //   setEnteredNameIsValid(true);

  // };

  const onSubmitHandler = (event) => {
    console.log(
      "🚀 ~ file: SimpleInput.js:39 ~ onSubmitHandler ~ onSubmitHandler:"
    );
    event.preventDefault();

    // setOnTouched(true);

    console.log(
      "🚀 ~ file: SimpleInput.js:46 ~ onSubmitHandler ~ nameisValidHelper(enteredName):",
      nameisValidHelper(enteredName)
    );
    if (!nameisValidHelper(enteredName)) {
      // setEnteredNameIsValid(false);
    }
  };

  // const onBlurNameHandler = (event) => {
  //   console.log("🚀 ~ file: SimpleInput.js:48 ~ onBlurNameHandler ~ setOnTouched:");
  //   setOnTouched(true);
  // };

  const nameInputIsInvalid = onTouched && !enteredNameIsValid;
  console.log(
    "🚀 ~ file: SimpleInput.js:58 ~ SimpleInput ~  onTouched && !enteredNameIsValid;:",
    onTouched,
    !enteredNameIsValid
  );
  const nameInputClass = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={onChangeHandler}
          onBlur={onBlurNameHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && <p className="error-text">Name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
