import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


function MealItemForm(props) {
  const [isError , setIsError] = useState(false);
  const itemQuantRef = useRef(); 

  const onSubmitHandler = function (e){
    e.preventDefault();
    
    const quantity = +itemQuantRef.current.value;
    
    // form validation 
    if(!quantity || quantity>5 || quantity<1){
      setIsError(true);
      return;
    }
    setIsError(false);

    // i need the details of the meal item 
    // therefore goining back to parent component
    props.addItemToCart(quantity);
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        input={{
          id: props.id,
          type: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: '1',
          
        }}
        ref= {itemQuantRef}
        label="Amount"
      />
      <button>Add +</button>
      {isError && <p>set amount to min 1 max 5</p>}
    </form>
  );
}

export default MealItemForm;
