import React, { Fragment } from "react";
import Header from "../../../components/header";
import logoImage from "../../../assets/images/logo.png";
import "./login.css";
import LoginForm from "../../../components/auth/login_form";

const LoginScreen = () => (
  <Fragment>
    <Header />
    <section className="body">
      <div className="container section">
        <div className="login-form-conteudo">
          <img src={logoImage} alt="" />

          <LoginForm />
        </div>
      </div>
    </section>
  </Fragment>
);

export default LoginScreen;
