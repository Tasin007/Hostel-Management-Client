import { useState, useEffect } from 'react';
import MealCard from '../Home/MealCard'; // Import your MealCard component

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch meals from your server
  useEffect(() => {
    // Fetch meals with pagination support
    fetch(`http://localhost:5000/meals?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals([...meals, ...data]); // Append new meals to the existing list
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching meals:', error));
  }, [pageNumber]);

  // Handle filtering based on search query, category, and price range
  useEffect(() => {
    // Implement your filtering logic here based on searchQuery, selectedCategory, and priceRange
    // Update filteredMeals accordingly
    // Reset pageNumber to 1 when filters change to start from the first page
    setPageNumber(1);
  }, [searchQuery, selectedCategory, priceRange]);

  // Implement infinite scrolling
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight - 200 && !isLoading) {
      // Load more meals when user nears the bottom of the page
      setIsLoading(true);
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Implement search input */}
      {/* Implement category filter */}
      {/* Implement price range filter */}
      <div>
        {filteredMeals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
      {isLoading && <p>Loading more meals...</p>}
    </div>
  );
};

export default MealsPage;
