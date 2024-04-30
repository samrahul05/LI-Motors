import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import SalesData from "../../assets/data/SalesData";

const BlogList = () => {
  return (
    <>
      {SalesData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, description,} = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          {/* <Link to={`/blogs/${title}`} className="blog__title">
            {title}
          </Link> */}
          <h5 className="blog__title text-center"> {title}</h5>
          <p className="section__description mt-3">
            {/* {description.length >50
              ? description.substr(0, 100)
              : description} */}
              {description}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
