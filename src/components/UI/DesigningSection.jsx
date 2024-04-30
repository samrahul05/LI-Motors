import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/cars-img/Designing.jpeg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container className="position-relative">
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img ">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12" className="my-auto" >
            <h2 className="section__title become__driver-title">
               Designing Phase
            </h2>

            <div >
           <h5 className="text-light mt-n1">In the designing phase, we leverage insights from our research to create innovative and user-centric solutions. Our design process includes</h5> 
            </div>

            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line "></i>User Experience (UX) Design
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Industrial Design
                </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Software Development
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Prototyping and Iteration
                </p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
