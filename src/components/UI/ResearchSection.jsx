import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/Research-removebg-preview.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "10px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Welcome to LIZMOTORS Mobility Pvt ld</h4>
              <h2 className="section__title">Research</h2>
              <p className="section__description">
              At Lizmotors Mobility, our research efforts are dedicated to understanding the evolving needs and preferences of our target market in the IoT and Mobility space. We conduct extensive market research to identify emerging trends, technological advancements, and customer pain points.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Consumer Behavior Analysis
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Technology Trends
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Competitive Analysis
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Regulatory Compliance
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6"  >
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100 mt-n1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
