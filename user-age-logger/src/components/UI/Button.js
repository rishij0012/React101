import classes from "./Button.module.css";

function Button(props) {
  const { type , onClick } = props;
  return (
    <button onClick={onClick} className={classes.button} type={type}>
      {props.children}
    </button>
  );
}

export default Button;
