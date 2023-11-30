import { useState, useEffect } from 'react';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend
    fetch('http://localhost:5000/reviews') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDelete = (reviewId) => {
    // Implement delete functionality
    console.log(`Delete review with ID: ${reviewId}`);
    // After deleting, you may want to refetch the reviews or update the state
  };

  const handleViewMeal = (mealId) => {
    // Redirect to meal detail page
    console.log(`View meal with ID: ${mealId}`);
    // Use navigate or a similar method to redirect
  };

  const sortReviews = (type) => {
    const sortedReviews = [...reviews].sort((a, b) => {
      if (type === 'likes') {
        return b.likesCount - a.likesCount;
      } else if (type === 'reviews') {
        return b.reviewsCount - a.reviewsCount;
      }
      return 0;
    });
    setReviews(sortedReviews);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between py-2">
        <button
          onClick={() => sortReviews('likes')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Sort by Likes
        </button>
        <button
          onClick={() => sortReviews('reviews')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Sort by Reviews
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Meal Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Likes Count
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reviews Count
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reviews.map((review) => (
              <tr key={review._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {review.mealTitle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {review.likesCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {review.reviewsCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-600 hover:text-red-900 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleViewMeal(review.mealId)}
                    className="text-blue-600 hover:text-blue-900 px-3 py-1 rounded"
                  >
                    View Meal
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
