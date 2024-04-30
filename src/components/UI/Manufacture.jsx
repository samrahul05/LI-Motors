import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3 ">
       <div className="mt-3 d-flex align-items-center gap-4 ">
         <h6 className="mb-0 mt-3 ">1.Quality Assurance</h6>
        </div>
        <p className="section__description ">
        We implement rigorous quality control measures throughout the manufacturing process to ensure that every product meets our standards for performance, reliability, and safety
        </p>
      </div>

      <div className="testimonial py-4 px-3">
      <div className="mt-3 d-flex align-items-center gap-4">
            <h6 className="mb-0 mt-3">2.Supply Chain Management</h6>
        </div>
        <p className="section__description">
        We optimize our supply chain for efficiency and resilience, carefully managing inventory levels, sourcing components from trusted suppliers, and mitigating risks of disruptions
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
          <h6 className="mb-0 mt-3">3.Scalability</h6>
        </div>
        <p className="section__description">
        We design our manufacturing processes with scalability in mind, enabling us to ramp up production quickly to meet growing demand and expand into new markets.
        </p>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
            <h6 className="mb-0 mt-3">4.Sustainability</h6>
        </div>
        <p className="section__description">
        We prioritize sustainable manufacturing practices, minimizing waste, reducing energy consumption, and sourcing materials responsibly to minimize our environmental impact.
        </p>
      </div>
    </Slider>
  );
};

export default Testimonial;
