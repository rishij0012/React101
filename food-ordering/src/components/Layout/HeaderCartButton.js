import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../store/cartContext";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext); 
  const [btnIsHighlighted , setBtnIsHighlighted] = useState(true);

  let headerBtnBumpClass = `${classes.button} ${btnIsHighlighted ? classes.bump: ""}`;

  useEffect(() => {
    setBtnIsHighlighted(true);

    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
  }, [cartCtx.items]);

  return (
    <button className={headerBtnBumpClass} onClick={props.showCart}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {cartCtx.totalItem}</span>
    </button>
  );
}

export default HeaderCartButton;
