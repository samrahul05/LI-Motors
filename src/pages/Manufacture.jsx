import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Manufacture from "../components/UI/Manufacture";
import SalesSection from "../components/UI/SalesSection";


const Blog = () => {
  return (
    <Helmet title="Manufacture">
      <CommonSection title="Manufacture" />
       {/* =========== Manufacturing =========== */}
       <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our</h6>
              <h2 className="section__title">Manufacturing</h2>
            </Col>

            <Manufacture />
          </Row>
        </Container>
      </section>

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

export default Blog;
