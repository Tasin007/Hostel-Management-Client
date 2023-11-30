import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddMeal = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Replace with your API endpoint
      await axios.post('http://localhost:5000/meal', data); 
      toast.success('Meal added successfully!');
      reset();
    } catch (error) {
      toast.error('Error adding meal.');
    }
  };

  const addToUpcoming = async (data) => {
    try {
      // Replace with your API endpoint for upcoming meals
      await axios.post('http://localhost:5000/upcomingMeals', data); 
      toast.success('Meal added to upcoming successfully!');
      reset();
    } catch (error) {
      toast.error('Error adding to upcoming meals.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-5 text-center">Add New Meal</h2>
        
        {/* Meal Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Meal Title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" {...register('title')} placeholder="Meal Title" />
        </div>

        {/* Meal Type/Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Meal Type/Category</label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="type" {...register('type')}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        {/* Meal Image */}
        {/* Note: Image handling should be implemented based on your backend requirements */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Meal Image</label>
          <input type="file" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="image" {...register('image')} />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">Ingredients</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ingredients" {...register('ingredients')} placeholder="Ingredients"></textarea>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" {...register('description')} placeholder="Description"></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input type="number" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="price" {...register('price')} placeholder="Price" />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">Rating</label>
          <input type="number" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="rating" {...register('rating')} placeholder="Rating" />
        </div>

        {/* Admin/Distributor Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminName">Admin/Distributor Name</label>
          <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="adminName" {...register('adminName')} placeholder="Admin/Distributor Name" />
        </div>

        {/* Admin/Distributor Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminEmail">Admin/Distributor Email</label>
          <input type="email" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="adminEmail" {...register('adminEmail')} placeholder="Admin/Distributor Email" />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Meal</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit(addToUpcoming)}>Add to Upcoming</button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
