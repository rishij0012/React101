import { useEffect, useState } from "react";

const useInput = (validator) => {
  const [enteredName, setEnteredName] = useState("");
  const [onTouched, setOnTouched] = useState(false);
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  useEffect(() => {
    console.log("🚀 ~ file: SimpleInput.js:23 ~ useEffect ~ useEffect:");
    if (enteredNameIsValid) {
      console.log("i am valid input");
    }
  }, [enteredNameIsValid]);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredName(value);
    if (!validator(value)) {
      setEnteredNameIsValid(false);
    }
    setEnteredNameIsValid(true);
  };

  const onBlurNameHandler = (event) => {
    console.log(
      "🚀 ~ file: SimpleInput.js:48 ~ onBlurNameHandler ~ setOnTouched:"
    );
    setOnTouched(true);
  };

  return {
    enteredName,
    onTouched,
    enteredNameIsValid,
    onChangeHandler,
    onBlurNameHandler
  };
};

export default useInput; 