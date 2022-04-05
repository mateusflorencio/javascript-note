import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeScreen from "./screen/home";
import RegisterScreen from "./screen/auth/register";
import LoginScreen from "./screen/auth/login";
import NoteScreen from "./screen/notes/index";
import UserEditScreen from "./screen/users/edit";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/notes" element={<NoteScreen />} />
        <Route exact path="/user/edit" element={<UserEditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
