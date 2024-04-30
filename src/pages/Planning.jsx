// THis for plannng

import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import DesigningSection from "../components/UI/DesigningSection";
import "../styles/about.css";
import Planning from "../components/UI/PlanningSection";
import Manufacture from "../components/UI/Manufacture";
import SalesSection from "../components/UI/SalesSection";


const Plan = () => {
  return (
    <Helmet title="Planning">
      <CommonSection title="Planning" />
        
    <section> 
    
             <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Planning</h2> 
                
            </Col> 
         
         <Planning/>   
        
    </section>
   
   
       


    <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Welcome To</h6>
              <h2 className="section__title">Designing</h2>
            </Col>
          </Row>
          <DesigningSection />
        </Container>
      </section>

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

export default Plan;
