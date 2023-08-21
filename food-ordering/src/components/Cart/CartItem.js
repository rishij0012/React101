import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cartContext";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  function removeItemHandler(id) {
    return () => {
      cartCtx.removeItem(id);
    };
  }

  function addItemHandler(id) {
    return () => {
      cartCtx.addItem({...props,quantity: 1});
    };
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler(props.id)}>−</button>
        <button onClick={addItemHandler(props.id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
