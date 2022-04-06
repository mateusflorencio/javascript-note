import React from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;
