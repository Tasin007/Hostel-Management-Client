import  { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MealCard from './MealCard'; // Import your MealCard component
import Grid from '@mui/material/Grid';

const MealsByCategory = () => {
  const [meals, setMeals] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Fetch meals data from your server using an API request
    fetch('http://localhost:5000/meal') // Replace with your server API endpoint
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const filterMealsByCategory = (category) => {
    if (category === 'All Meals') {
      return meals;
    }
    return meals.filter((meal) => meal.category === category);
  };

  const renderMealCards = (category) => {
    const filteredMeals = filterMealsByCategory(category);
    return filteredMeals.map((meal) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={meal._id} style={{ marginTop: '10px', marginBottom: '10px' }}>
        <MealCard meal={meal} />
      </Grid>
    ));
  };

  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab>All Meals</Tab>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>

        <TabPanel>
          <Grid container spacing={2}>
            {renderMealCards('All Meals')}
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid container spacing={2}>
            {renderMealCards('Breakfast')}
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid container spacing={2}>
            {renderMealCards('Lunch')}
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid container spacing={2}>
            {renderMealCards('Dinner')}
          </Grid>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
