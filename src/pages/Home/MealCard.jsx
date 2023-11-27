import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 
const MealCard = ({ meal }) => {
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={meal.image}
        title={meal.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {meal.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${meal.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Distributor: {meal.meal_distributor}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link to={`/meal/${meal._id}`} style={{ textDecoration: 'none' }}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MealCard;
