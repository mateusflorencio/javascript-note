import React, { Fragment } from "react";
import Header from "../../../components/header";
import logoImage from "../../../assets/images/logo.png";
import "./login.css";
import { Link } from "react-router-dom";

const LoginScreen = () => (
  <Fragment>
    <Header />
    <section className="body">
      <div className="container section">
        <div className="login-form-conteudo">
          <img src={logoImage} alt="" />
          <form>
            <div className="mb-3 mt-4">
              <label
                for="exampleInputEmail1"
                className="form-label"
                className="mt-3 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="div-login-button">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </Fragment>
);

export default LoginScreen;
