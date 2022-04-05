import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./screen/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
