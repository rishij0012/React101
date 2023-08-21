import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (initAmt, item) => initAmt += item.quantity * item.price,
    0
  ).toFixed(2);
  console.log("🚀 ~ file: Cart.js:15 ~ Cart ~ cartCtx.items:", cartCtx.items)

  const cartItems = cartCtx.items.map((item) => {
    return <CartItem key={item.id} {...item}></CartItem>;
  });

  return (
    <Modal onToggleCart={props.onToggleCart}>
      {cartCtx.items.length === 0 ? (
        <center>
          <h2>No item in Cart</h2>
        </center>
      ) : (
        <ul className={classes["cart-items"]}>{cartItems}</ul>
      )}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onToggleCart(false)}
        >
          Close
        </button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
