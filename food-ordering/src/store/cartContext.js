import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  totalItem: 0, // 2 item but 1st item added 2 time ... 3 totalItems
  emptyCart: () => {},
});

const defaultCart = { items: [], totalItem: 0 };
const cartReducer = (preState, action) => {
  switch (action.type) {
    case "insert":
      const sameItemInCart = preState.items.filter(
        (ite) => ite.id === action.item.id
      )[0];

      // if we have item in cart
      if (sameItemInCart) {
        const updatedItems = preState.items
          .filter((ite) => ite.id !== action.item.id)
          .concat({
            ...action.item,
            quantity: action.item.quantity + sameItemInCart.quantity,
          });
        preState.totalItem = preState.totalItem + action.item.quantity;
        return { items: updatedItems, totalItem: preState.totalItem };
      } else {
        const updatedItems = preState.items.concat(action.item);
        preState.totalItem = preState.totalItem + action.item.quantity;
        return { items: updatedItems, totalItem: preState.totalItem };
      }

    case "remove":
      const filterItem = preState.items.filter((x) => x.id === action.id)[0];
      let updatedItem = preState.items;

      if (filterItem && filterItem.quantity === 1) {
        console.log(
          "🚀 ~ file: cartContext.js:46 ~ cartReducer ~ filterItem.quantity === 1:",
          filterItem.quantity === 1
        );
        updatedItem = preState.items.filter((x) => x.id !== action.id);
        return {
          items: updatedItem,
          totalItem: preState.totalItem - 1,
        };
      }
      filterItem.quantity -= 1;
      return {
        items: updatedItem,
        totalItem: preState.totalItem - 1,
      };

    case "emptyCart":
      return {
        items: [],
        totalItem: 0,
      };

    default:
      break;
  }
  return defaultCart;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "insert", item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "remove", id });
  };

  const emptyCartHandler = () => {
    dispatchCartAction({ type: "emptyCart" });
  };

  const initCartContext = {
    items: cartState.items,
    totalItem: cartState.totalItem,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
  };

  return (
    <CartContext.Provider value={initCartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
