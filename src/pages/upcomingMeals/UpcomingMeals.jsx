import { useEffect, useState } from "react";
import UpcomingMealCard from "./UpcomingMealCard";

const UpcomingMeals = () => {
  const [upcomingMeals, setUpcomingMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/upcomingMeals")
      .then((res) => res.json())
      .then((data) => setUpcomingMeals(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {upcomingMeals.map((meal) => (
        <UpcomingMealCard key={meal._id} meal={meal} />
      ))}
    </div>
  );
};

export default UpcomingMeals;
