import React, { Fragment } from "react";
import Header from "../../../components/header";
import logoImage from "../../../assets/images/logo.png";
import RegisterForm from "../../../components/auth/register_form";
import "./register.css";

const RegisterScreen = () => (
  <Fragment>
    <Header />
    <section className="body">
      <div className="container section">
        <div className="form-conteudo">
          <img src={logoImage} alt="" />
          <RegisterForm />
        </div>
      </div>
    </section>
  </Fragment>
);

export default RegisterScreen;
