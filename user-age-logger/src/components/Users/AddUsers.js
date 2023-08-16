import React, { Fragment, useState } from "react";
import Cards from "../UI/Cards";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUsers(props) {
  const { addUserhandler } = props;
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [formError, setFormError] = useState({
    message: "",
    title: "",
    has: false,
  });

  const onChangeHandler = (type) => {
    return (e) => {
      const value = e.target.value;

      setFormData((preState) => {
        return {
          ...preState,
          [type]: value,
        };
      });
    };
  };

  function resetData() {
    setFormData({ name: "", age: "" });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formData.name.length === 0) {
      setFormError({
        message: "length should greater than 1",
        title: "Name error",
        has: true,
      });
      return;
    }

    if (+formData.age < 1) {
      setFormError({
        message: "Age should greater than 1",
        title: "Age error",
        has: true,
      });
      return;
    }

    addUserhandler(formData);
    resetData();
  };

  const closeModal = () => {
    console.log("check123123");
    setFormError({
      message: "",
      title: "",
      has: false,
    });
  };

  return (
    <Fragment>
      {formError.has && (
        <ErrorModal
          onClick={closeModal}
          title={formError.title}
          message={formError.message}
        />
      )}
      <Cards className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={onChangeHandler("name")}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={formData.age}
            onChange={onChangeHandler("age")}
          />

          {/* <button type="submit"> Submit </button> */}
          <Button type="submit">Submit</Button>
        </form>
      </Cards>
    </Fragment>
  );
}

export default AddUsers;
