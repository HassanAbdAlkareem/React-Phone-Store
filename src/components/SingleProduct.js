import React from "react";
import { useGlobelContext } from "../FunctionAlContext";
import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, openModel, addToCart } = useGlobelContext();
  const Product = getSingleProduct(id);

  const { company, img, info, price, title, inCart } = Product;
  console.log(inCart);
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
        <button onClick={() => addToCart(id)}>
          {inCart ? "in Cart" : "add To cart"}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
