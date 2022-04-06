import React, { Component } from "react";
import { formatPostcssSourceMap } from "vite";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigation = useNavigate();
  const onNavigation = false;
  React.useEffect(() => {
    if (onNavigation) {
      navigation("/login");
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          navigation(true)
        )
      }
    />
  );
};

export default PrivateRoute;
