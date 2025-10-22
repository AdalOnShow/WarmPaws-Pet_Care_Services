import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />
      },
    ]
  },
  {
    path: "/*",
    element: <Error />
  }
]);