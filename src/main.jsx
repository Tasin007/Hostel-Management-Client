import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import('preline')

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-right"/>
    </AuthProvider>
  </React.StrictMode>,
);
