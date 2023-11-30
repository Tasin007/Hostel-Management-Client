import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'; // Import default styles
import './AllMeals.css';

const AllMeals = ({ meals, onUpdate, onDelete }) => {
  return (
    <div className="responsive-table">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th>Meal Title</th>
            <th>Likes Count</th>
            <th>Reviews Count</th>
            <th>Distributor Name</th>
            <th>Distributor Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meals.map(meal => (
            <tr key={meal._id}>
              <td>{meal.title}</td>
              <td>{meal.likes}</td>
              <td>{meal.reviewsCount}</td>
              <td>{meal.distributorName}</td>
              <td>{meal.distributorEmail}</td>
              <td>
                <AwesomeButton type="primary" onPress={() => onUpdate(meal._id)}>Update</AwesomeButton>
                <AwesomeButton type="secondary" onPress={() => onDelete(meal._id)}>Delete</AwesomeButton>
                <Link to={`/meal/${meal._id}`} className="view-link">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMeals;
