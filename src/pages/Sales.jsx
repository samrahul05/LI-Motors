import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import SalesSection from "../components/UI/SalesSection";

import "../styles/contact.css";



const Contact = () => {
  return (
    <Helmet title="Marketing">
      <CommonSection title=" Sales/Marketing" />
    
     {/* =============== Sales =========== */}
     <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Sales/Marketing</h6>
              <h2 className="section__title">Marketing</h2>
            </Col>

            <SalesSection />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
