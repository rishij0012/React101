import { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg"; // dynamic import of the img 
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Doodle</h1>
        <HeaderCartButton showCart={props.showCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="delicious food" />
      </div>
    </Fragment>
  );
}

export default Header;
