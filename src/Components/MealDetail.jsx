import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MealDetails = () => {
  const { _id } = useParams();
  const [meal, setMeal] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    // Fetch meal details from your server using the _id parameter
    fetch(`http://localhost:5000/meal/${_id}`) // Replace with your server API endpoint
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.error('Error fetching meal details:', error));
  }, [_id]);

  const handleLikeClick = () => {
    // Handle liking the meal
    if (!liked) {
      // Increment likes count and update liked state
      setLikesCount(likesCount + 1);
      setLiked(true);

      // Send a request to your server to update the likes count for this meal
      // Example: fetch(`/api/meal/${_id}/like`, { method: 'POST' });
    }
  };

  return (
    <div>
      {meal ? (
        <div>
          <img src={meal.image} alt={meal.title} />
          <Typography variant="h4">{meal.title}</Typography>
          <Typography variant="subtitle1">Admin: {meal.meal_distributor_admin}</Typography>
          <Typography variant="body1">{meal.description}</Typography>
          <Typography variant="body2">Ingredients: {meal.ingredients.join(', ')}</Typography>
          <Typography variant="body2">Post Time: {meal.post_time}</Typography>
          <Typography variant="body2">Rating: {meal.rating}</Typography>
          <Button variant="outlined" onClick={handleLikeClick}>
            {liked ? 'Liked' : 'Like'}
          </Button>
          <Button variant="contained" color="primary">
            Meal Request
          </Button>
          {/* Render reviews here */}
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
};

export default MealDetails;
