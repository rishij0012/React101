import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Cards from "./Cards";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  const Modal = (props) => {
    return (
      <Cards className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick} type="button">
            Close
          </Button>
        </footer>
      </Cards>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal onClick={props.onClick} title={props.title} message={props.message}/>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
}

export default ErrorModal;
