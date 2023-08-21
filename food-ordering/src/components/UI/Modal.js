import { Fragment } from "react";
import  ReactDOM from "react-dom";

import classes from "./Modal.module.css";


const BackDrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal} > 
        <div className={classes.content} >{props.children}</div>
    </div>
}

function Modal(props) {


  return (
    <Fragment>
        { ReactDOM.createPortal(<BackDrop onClick={props.onToggleCart(false)}/> , document.getElementById("backdrop")) }
        { ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay> , document.getElementById("overlays")) }
    </Fragment>
  )
}

export default Modal