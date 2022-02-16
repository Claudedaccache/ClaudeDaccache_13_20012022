import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const isLogged = useSelector(
    (state) => state.signInAuthentication.isLoggedIn
  );

  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/user/signIn" state={{ from: location }} />;
  }
  return children;
};

export default AuthenticatedRoute;
