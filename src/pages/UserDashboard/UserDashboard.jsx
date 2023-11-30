import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, getUserRequestedMeals, getUserReviews } from '../../Services/api';
// Assume getUserProfile, getUserRequestedMeals, getUserReviews are your API call functions

const UserDashboard = () => {
  const [userProfile, setUserProfile] = useState({});
  const [requestedMeals, setRequestedMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Replace with your logic to get the user's email
    const email = "user@example.com"; // This should be dynamically obtained

    getUserProfile(email)
      .then(data => setUserProfile(data))
      .catch(err => console.error(err));
    
    getUserRequestedMeals(email)
      .then(data => setRequestedMeals(data))
      .catch(err => console.error(err));

    getUserReviews(email)
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* User Profile Section */}
        <div className="md:col-span-1 bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-4">My Profile</h3>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          {/* Render other user details */}
        </div>

        {/* Requested Meals Section */}
        <div className="md:col-span-1 bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-4">Requested Meals</h3>
          {requestedMeals.map(meal => (
            <div key={meal._id} className="mb-2 p-2 border-b">
              {meal.title}
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="md:col-span-1 bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-4">My Reviews</h3>
          {reviews.map(review => (
            <div key={review._id} className="mb-2 p-2 border-b">
              {review.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;