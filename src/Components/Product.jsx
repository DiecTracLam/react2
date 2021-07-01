import React from "react";

function Product({name,image,prices}) {
  return (
    <div className="wrap-product">
      <div className="icon-product">
        <span className="enlarge-icon">icon</span>
        <span className="handbag-icon">icon</span>
      </div>
      <div className="img-product">
        <img src={image} alt="" />
      </div>
      <div className="price-name">
        <span className="name-product">{name}</span>
        <span className="price-product">{prices}.00$</span>
      </div>
    </div>
  );
}

export default Product;
