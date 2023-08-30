import { useEffect, useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (text) => text.trim() === "";
const isFiveDigit = (text) => text.trim() === "";

const CheckoutForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const userData = [
      nameInputRef.current.value,
      streetInputRef.current.value,
      postCodeInputRef.current.value,
      cityInputRef.current.value,
    ];
    const [nameInput, streeInput, postCodeInput, cityInput] = userData;

    const nameInputIsValid = !isEmpty(nameInput);
    const streeInputIsValid = !isEmpty(streeInput);
    const postCodeInputIsValid = !isEmpty(postCodeInput);
    const cityInputIsValid = !isFiveDigit(cityInput);

    setFormValidity({
      name: nameInputIsValid,
      street: streeInputIsValid,
      city: cityInputIsValid,
      postCode: postCodeInputIsValid,
    });

    if (
      nameInputIsValid &&
      streeInputIsValid &&
      postCodeInputIsValid &&
      cityInputIsValid
    ) {
      // submit the form
      props.onConfirm(userData)
    } else {
      // error message for the user for specific input
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please Enter a vlaid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please Enter a vlaid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postCodeInputRef} />
        {!formValidity.postCode && <p>Please Enter a vlaid postCode</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please Enter a vlaid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
