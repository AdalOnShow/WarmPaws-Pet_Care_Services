import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
