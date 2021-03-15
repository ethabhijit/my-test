import React from 'react';
import "./Category.css";
import cate1 from "../../images/cate1.png";
import cate2 from "../../images/cate2.png";
import cate3 from "../../images/cate3.png";
import cate4 from "../../images/cate4.png";
import cate5 from "../../images/cate5.png";
import cate6 from "../../images/cate6.png";


const Category = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center">Category</h2>
      <div className="container category-container">
        <img src={cate1} />
        <img src={cate2} />
        <img src={cate3} />
        <img src={cate4} />
        <img src={cate5} />
        <img src={cate6} />
      </div>
    </div>
  );
};

export default Category;
