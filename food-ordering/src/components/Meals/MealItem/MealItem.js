import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext";

function MealItem(props) {
  const { meal } = props;
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (quantity) => {
    cartCtx.addItem({ ...meal , quantity });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price}</div>
      </div>
        <MealItemForm addItemToCart={addItemToCartHandler} id={meal.id}/>
    </li>
  );
}

export default MealItem;
