

// Sample data for nutrition tips and recipes
const nutritionTips = [
  "Eat a variety of fruits and vegetables for a balanced diet.",
  "Include whole grains in your meals for sustained energy.",
  "Stay hydrated by drinking plenty of water throughout the day.",
];

const healthyRecipes = [
  {
    title: "Chicken Stir-Fry",
    description: "A quick and easy stir-fry recipe with tender chicken and colorful vegetables, tossed in a savory sauce.",
    image: "https://i.ibb.co/NN45NkQ/Chicken-Stir-Fry.jpg",
  },
  {
    title: "Vegetable Curry",
    description: "A flavorful vegetable curry made with a blend of aromatic spices and served with fragrant basmati rice.",
    image: "https://i.ibb.co/pQXVJpJ/Vegetable-Curry.jpg",
  },
  {
    title: "Pasta Primavera",
    description: "Delicious pasta primavera loaded with fresh spring vegetables and a creamy Alfredo sauce.",
    image: "https://i.ibb.co/qyCX0Lx/Pasta-Primavera.jpg",
  },
  {
    title: "Salmon Teriyaki",
    description: "Grilled salmon fillets glazed with a sweet and savory teriyaki sauce, served with steamed broccoli.",
    image: "https://i.ibb.co/58gPvZd/Salmon-Teriyaki.jpg",
  },
  {
    title: "Caprese Salad",
    description: "A classic Caprese salad featuring ripe tomatoes, fresh mozzarella, basil leaves, and balsamic glaze.",
    image: "https://i.ibb.co/WsFH0sp/Caprese-Salad.jpg",
  },
  {
    title: "Chocolate Brownies",
    description: "Decadent chocolate brownies with a fudgy texture and a rich cocoa flavor, perfect for dessert lovers.",
    image: "https://i.ibb.co/71M8851/Chocolate-Brownies.jpg",
  },
];

function HealthNutritionSection() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Health and Nutrition</h2>

      {/* Nutrition Tips */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Nutrition Tips</h3>
        <ul className="list-disc list-inside">
          {nutritionTips.map((tip, index) => (
            <li key={index} className="mb-2 text-lg">{tip}</li>
          ))}
        </ul>
      </div>

      {/* Healthy Recipes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {healthyRecipes.map((recipe, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <figure><img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover" /></figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthNutritionSection;
