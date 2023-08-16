import React, { Fragment } from "react";

import Cards from "./Cards";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {


  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Cards className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick} type="button">Close</Button>
        </footer>
      </Cards>
    </Fragment>
  );
}

export default ErrorModal;
