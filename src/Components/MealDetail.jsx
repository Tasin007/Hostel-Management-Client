import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MealDetails = () => {
    const [meal, setMeal] = useState(null);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const { id } = useParams();

  useEffect(() => {
    // Fetch meal[0]? details from your server using the _id parameter
    fetch(`http://localhost:5000/meal/${id}`) // Replace with your server API endpoint
      .then((response) => response.json())
      .then((data) => 
        setMeal(data)
      )
      .catch((error) => console.error('Error fetching mealdetails:', error));
  }, [id]);


  const handleLikeClick = () => {
    // Handle liking the meal[0]?
    if (!liked) {
      // Increment likes count and update liked state
      setLikesCount(likesCount + 1);
      setLiked(true);

      // Send a request to your server to update the likes count for this meal[0]?
      // Example: fetch(`/api/meal[0]?/${_id}/like`, { method: 'POST' });
    }
  };

  return (
    <div>
      {meal ? (
        <div className='max-w-7xl mx-auto'>
          <img src={meal[0]?.image} alt={meal[0]?.title} />
          <Typography variant="h4">{meal[0]?.title}</Typography>
          <Typography variant="subtitle1">Admin: {meal[0]?._distributor_admin}</Typography>
          <Typography variant="body1">Description:{meal[0]?.description}</Typography>
          <Typography variant="body2">Ingredients: {meal[0]?.ingredients?.join(', ')}</Typography>
          <Typography variant="body2">Post Time: {meal[0]?.post_time}</Typography>
          <Typography variant="body2">Rating: {meal[0]?.rating}</Typography>
          <Button variant="outlined" onClick={handleLikeClick}>
            {liked ? 'Liked' : 'Like'}
          </Button>
          <Button variant="contained" color="primary">
            meal[0]? Request
          </Button>
          {/* Render reviews here */}
        </div>
       
      ) : (
        <p>Loading  details...</p>
      )}
    </div>
  );
};

export default MealDetails;
