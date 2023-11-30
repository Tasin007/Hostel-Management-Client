import  { useState, useEffect } from "react";
import axios from "axios";

const ServeMeals = () => {
  const [requestedMeals, setRequestedMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch requested meals from the server
    axios
      .get(`/api/requestedMeals?search=${searchQuery}`)
      .then((response) => {
        setRequestedMeals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching requested meals: ", error);
      });
  }, [searchQuery]);

  const handleServeMeal = (mealId) => {
    // Send a request to update the meal status to "delivered"
    axios
      .put(`/api/serveMeal/${mealId}`)
      .then(() => {
        // Refresh the requested meals list after serving
        setSearchQuery("");
      })
      .catch((error) => {
        console.error("Error serving meal: ", error);
      });
  };

  return (
    <div className="serve-meals-container">
      <h1>Serve Meals</h1>
      {/* Add a search input */}
      <input
        type="text"
        placeholder="Search by username or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Display requested meals in a table */}
      <table className="meal-table">
        <thead>
          <tr>
            <th>Meal Title</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requestedMeals.map((meal) => (
            <tr key={meal._id}>
              <td>{meal.title}</td>
              <td>{meal.user.email}</td>
              <td>{meal.user.name}</td>
              <td>{meal.status}</td>
              <td>
                {meal.status === "pending" ? (
                  <button
                    className="serve-button"
                    onClick={() => handleServeMeal(meal._id)}
                  >
                    Serve
                  </button>
                ) : (
                  <span className="served-text">Already Served</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServeMeals;
