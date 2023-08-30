import { DUMMY_MEALS } from "./dummyMeals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import { constants } from "../../utils/constant";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const { isError, isLoading, useFetchHandler: fetchMeals } = useFetch();

  useEffect(() => {
    const transformLogic = (data) => {
      setMeals(data);
    };
    fetchMeals({ url: constants.backendUrl+"/meals.json" }, transformLogic);
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <center>Wait a sec !!!</center>}
        {!isError && !isLoading && !mealsList.length && (
          <center>Meals not Available</center>
        )}
        {isError && <center>{isError}</center>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
