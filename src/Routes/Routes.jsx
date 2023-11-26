import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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
    ]
  },
]);
