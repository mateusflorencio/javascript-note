import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../../assets/images/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="container navbar">
      <nav className="navbar-container ">
        <NavLink exact to="/" className="nav-logo">
          <img src={logoImage} alt="" className="nav-logo-image img-fluid." />
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              className="nav-link btn-register"
              exact
              to="/register"
              onClick={handleClick}
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link btn-login"
              exact
              to="/login"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon " onClick={handleClick}>
          <i className={click ? "  bi bi-x-square-fill " : "bi bi-list"}></i>
        </div>
      </nav>
    </div>
  );
}
