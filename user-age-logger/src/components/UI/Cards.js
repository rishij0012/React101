import classes from "./Cards.module.css";

function Cards(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Cards;
