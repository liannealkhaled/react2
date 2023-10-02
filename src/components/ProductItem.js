import React from "react";

const ProductItem = (props) => {
  return (
    <div className="design1 ">
      <img className="imgdesign" src={props.product.img} />
      <h5> {props.product.order}</h5>
      <h5> {props.product.price}</h5>
    </div>
  );
};

export default ProductItem;
