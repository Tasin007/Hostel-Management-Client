import { useState, useEffect } from "react";
import axios from "axios";

const UpcomingMeals = () => {
  const [upcomingMeals, setUpcomingMeals] = useState([]);

  useEffect(() => {
    // Fetch upcoming meals from the server
    axios
      .get("/api/upcomingMeals")
      .then((response) => {
        // Sort the meals based on likes count (descending order)
        const sortedMeals = response.data.sort((a, b) => b.likes - a.likes);
        setUpcomingMeals(sortedMeals);
      })
      .catch((error) => {
        console.error("Error fetching upcoming meals: ", error);
      });
  }, []);

  const handlePublishMeal = (mealId) => {
    // Check if the meal has 10 or more likes
    const meal = upcomingMeals.find((meal) => meal._id === mealId);
    if (meal && meal.likes >= 10) {
      // Send a request to add the meal to the "All Meals" collection
      axios
        .post("/api/allMeals", meal)
        .then(() => {
          // Remove the meal from upcoming meals
          const updatedMeals = upcomingMeals.filter(
            (meal) => meal._id !== mealId
          );
          setUpcomingMeals(updatedMeals);
        })
        .catch((error) => {
          console.error("Error publishing meal: ", error);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="mt-3">Upcoming Meals</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Meal Title</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {upcomingMeals.map((meal) => (
            <tr key={meal._id}>
              <td>{meal.title}</td>
              <td>{meal.likes}</td>
              <td>
                {meal.likes >= 10 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handlePublishMeal(meal._id)}
                  >
                    Publish
                  </button>
                ) : (
                  "Not Enough Likes"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingMeals;
