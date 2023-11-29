import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Paper, Grid, Container } from '@mui/material';

const MealDetails = () => {
  const [meal, setMeal] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/meal/${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.error('Error fetching meal details:', error));
  }, [id]);

  const handleLikeClick = () => {
    if (!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
      // Update likes count on server...
    }
  };

  if (!meal || meal.length === 0) {
    return <Typography>Loading details...</Typography>;
  }

  const mealDetails = meal[0];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={mealDetails.image} alt={mealDetails.title} style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{mealDetails.title}</Typography>
            <Typography variant="subtitle1" gutterBottom>Admin: {mealDetails.meal_distributor_admin}</Typography>
            <Typography variant="body1" gutterBottom>Description: {mealDetails.description}</Typography>
            <Typography variant="body2" gutterBottom>
              Ingredients: {mealDetails.ingredients ? mealDetails.ingredients.join(', ') : 'No ingredients listed'}
            </Typography>
            <Typography variant="body2" gutterBottom>Post Time: {mealDetails.post_time}</Typography>
            <Typography variant="body2" gutterBottom>Rating: {mealDetails.rating}</Typography>
            <Button variant="outlined" onClick={handleLikeClick} style={{ marginRight: '10px' }}>
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button variant="contained" color="primary">
              Request Meal
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MealDetails;
