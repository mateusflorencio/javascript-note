import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import UserService from "../../services/users";
import "./header_logged.css";

export const HeaderLogged = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome = true;
  };

  useEffect(() => {
    if (redirectToHome) return <Navigate to="/" replace />;
  });

  return (
    <Navbar bg="ligth" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logoImage} alt="" className="nav-logo-image img-fluid" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu_logged" />
        <Navbar.Collapse id="menu_logged ">
          <Nav className="nav-logged">
            <Nav.Link href="/user/edit">
              <p className=" nav-button-myaccount ">My Account</p>
            </Nav.Link>
            <Nav.Link
              onClick={(e) => logOut()}
              className="nav-button-logged"
              href="/"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
