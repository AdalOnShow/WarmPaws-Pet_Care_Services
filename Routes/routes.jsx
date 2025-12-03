import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import PublicRoute from "./PublicRoute";
import LoadingSpinner from "../Components/PageLoadingSpinner";
import { RotateLoader } from "react-spinners";
import HydrateFallbackElement from "../Components/hydrateFallbackElement";
import Page404 from "../Pages/Page404";
import AboutUs from "../Pages/AboutUs";
import Contact from "./../Pages/Contact";
import Support from "./../Pages/Support";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/services.json"),
        hydrateFallbackElement: <HydrateFallbackElement />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/services.json"),
        hydrateFallbackElement: <HydrateFallbackElement />,
      },
      {
        path: "/*",
        element: <Page404 />,
      },
    ],
  },
]);
