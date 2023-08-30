import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import Checkoutform from "./CheckoutForm";
import useFetch from "../../hooks/use-fetch";
import { constants } from "../../utils/constant";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isOrder, setIsOrder] = useState(false);
  const { isError, isLoading, useFetchHandler: postMeals } = useFetch();

  const totalAmount = cartCtx.items
    .reduce((initAmt, item) => (initAmt += item.quantity * item.price), 0)
    .toFixed(2);
  console.log("🚀 ~ file: Cart.js:15 ~ Cart ~ cartCtx.items:", cartCtx.items);

  const cartItems = cartCtx.items.map((item) => {
    return <CartItem key={item.id} {...item}></CartItem>;
  });

  const onOrderHandler = (event) => {
    setIsOrder(true);
  };

  const modalAction = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={props.onToggleCart(false)}
      >
        Close
      </button>
      <button onClick={onOrderHandler} className={classes["button"]}>
        Order
      </button>
    </div>
  );

  const makeOrder = async (userData) => {
    const transformLogic = (data) => {
      cartCtx.emptyCart();
      props.onToggleCart(false);
    };

    postMeals(
      {
        url: constants.backendUrl + "/orders.json",
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItem: cartCtx.items }),
      },
      transformLogic()
    );
  };

  return (
    // modal har baar run hoga even thoug we have not changed props
    // we need to tell react to only run Modal when props change
    // Modal mai change hoga
    // react.memo 🤜 check karega props mai change toh nai hora .... props store karenga
    <Modal onToggleCart={props.onToggleCart}>
      {cartCtx.items.length === 0 ? (
        <center>
          <h2>No item in Cart</h2>
        </center>
      ) : (
        <Fragment>
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          {isOrder && (
            <Checkoutform
              onConfirm={makeOrder}
              onCancel={props.onToggleCart(false)}
            />
          )}
        </Fragment>
      )}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {!isOrder && modalAction}
    </Modal>
  );
}

export default Cart;
