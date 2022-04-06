import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import presentationImagen from "../../assets/images/presentation.png";
import Header from "../../components/header";
import "./home.css";
import { Link } from "react-router-dom";

const HomeScreen = () => (
  <Fragment>
    <Header />
    <Container fluid className="home">
      <div>
        <Container>
          <Row className="row d-flex align-items-center">
            <Col sm="auto" md="auto" s lg={6}>
              <div className="d-bloco-conteudo">
                <div className="d-conteudo-title pt-5">
                  <h2 className="text-white">
                    Create notes easily and access when you wants on the cloud
                  </h2>
                </div>
                <div className="text-white my-5">
                  <span style={{ fontSize: "20px" }}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                    <br />
                    <br />
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print.
                  </span>
                </div>
                <div>
                  <Link
                    to="/register"
                    className="btn btn-outline-light btn-lg"
                    variant="outline-light "
                    size="lg"
                  >
                    Register for free Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm="auto" md="auto" lg={6}>
              <div>
                <img src={presentationImagen} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  </Fragment>
);

export default HomeScreen;
