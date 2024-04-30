import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import PlanningData from "../../assets/data/PlanningData";

const ServicesList = () => {
  return (
    <>
      {PlanningData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (

  <Col lg="6" md="6" sm="6" className="mb-3 mx-auto  ">
    <div className="service__item ">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6 className=" ">{item.title}</h6>
      <p className="section__description ">{item.desc}</p>
    </div>
  </Col>
  
 
);

export default ServicesList;
