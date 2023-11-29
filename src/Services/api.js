

const BASE_URL = 'http://localhost:5000'; 

export const getUserProfile = (email) => {
  return fetch(`${BASE_URL}/user/profile/${email}`)
    .then(handleResponse);
};

export const getUserRequestedMeals = (email) => {
  return fetch(`${BASE_URL}/requested-meals/${email}`)
    .then(handleResponse);
};

export const getUserReviews = (email) => {
  return fetch(`${BASE_URL}/user/reviews/${email}`)
    .then(handleResponse);
};

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
