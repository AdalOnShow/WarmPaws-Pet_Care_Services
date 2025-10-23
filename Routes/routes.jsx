import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";


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
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch('/services.json')
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
        loader: () => fetch('/services.json')
      },
    ]
  },
  {
    path: "/*",
    element: <Error />
  }
]);