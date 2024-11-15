import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        setMealData(data);
        console.log(data);

        if (!response.ok) {
            console.log('Smth went wrong');
        }
      } catch (error) {
        throw new Error(error);
        
      }
    };
    fetchData();
  }, []);

  return (
    <ul id="meals">
      {mealData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
