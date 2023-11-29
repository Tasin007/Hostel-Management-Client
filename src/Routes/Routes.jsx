import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MealDetail from "../Components/MealDetail";
import MealsPage from "../pages/Meals/MealsPage";
import UpcomingMeals from "../pages/upcomingMeals/UpcomingMeals";
import UserDashboard from "../pages/UserDashboard/UserDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/meal/:id",
            element:<MealDetail></MealDetail>,
          },
          {
            path: "/meals",
            element:<MealsPage></MealsPage>,
          },
          {
            path: "/upcomingmeals",
            element:<UpcomingMeals></UpcomingMeals>,
          },
          {
            path: "/dashboard",
            element:<UserDashboard></UserDashboard>,
          },
    ]
  },
]);
