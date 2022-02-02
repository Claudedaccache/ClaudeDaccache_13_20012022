import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Auth from "../Contexts/Auth";

const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Auth);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/user/signIn" state={{ from: location }} />;
  }
  return children;
};

export default AuthenticatedRoute;
