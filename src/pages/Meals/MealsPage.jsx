import  { useState, useEffect } from 'react';
import MealCard from '../Home/MealCard'; // Your MealCard component
import InfiniteScroll from 'react-infinite-scroll-component'; // Import the infinite scroll component

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const fetchMeals = async () => {
    try {
      const response = await fetch(`http://localhost:5000/meal?page=${page}`);
      const data = await response.json();
      setMeals([...meals, ...data]);
      if (data.length === 0 || data.length < 10) {
        setHasMore(false);
      }
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (minOrMax) => (e) => {
    const value = e.target.value;
    if (minOrMax === 'min') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const filteredMeals = meals.filter((meal) =>
    meal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || meal.category === selectedCategory) &&
    meal.price >= (minPrice || 0) && meal.price <= (maxPrice || Infinity)
  );

  return (
    <div className="container mx-auto p-4">
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <input
        type="text"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4 md:mb-0"
      />
      <select value={selectedCategory} onChange={handleCategoryChange} className="p-2 border border-gray-300 rounded mb-4 md:mb-0 md:mx-2">
        <option value="All">All Categories</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={handlePriceChange('min')}
        className="p-2 border border-gray-300 rounded mb-4 md:mb-0"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handlePriceChange('max')}
        className="p-2 border border-gray-300 rounded"
      />
    </div>

    <InfiniteScroll
      dataLength={filteredMeals.length}
      next={fetchMeals}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMeals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
    </InfiniteScroll>
  </div>
  );
};

export default MealsPage;
