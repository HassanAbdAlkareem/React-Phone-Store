import React from "react";
import { UseGlobelContext } from "../FunctionAlContext";
import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, openModal, addToCart } = UseGlobelContext();
  const Product = getSingleProduct(id);

  const { company, img, info, price, title, inCart } = Product;

  return (
    <div className="single-product">
      <h1 className="title">{title}</h1>
      <img src={img} />
      <h3 className="model-title">Model : {title}</h3>
      <h4 className="company">Made By : {company}</h4>
      <h2 className="price">Price : ${price}</h2>
      <div className="info">
        <p> Some Infor About The Product:</p>
        <p>{info}</p>
      </div>
      <div className="links">
        <Link to="/">back to product</Link>
        <button
          onClick={() => {
            addToCart(id);
            openModal(id);
          }}
        >
          {inCart ? "in Cart" : "add To cart"}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
