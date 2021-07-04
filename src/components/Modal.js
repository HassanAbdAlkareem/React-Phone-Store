import React from "react";
import { Link } from "react-router-dom";
import { UseGlobelContext } from "../FunctionAlContext";

const Modal = () => {
  const { modalOpen, modalProduct, closeModal } = UseGlobelContext();
  const { title, img, price } = modalProduct;

  if (!modalOpen) {
    return null;
  }
  return (
    <div className="modal-main">
      <div className="modall">
        <h2>item added to the cart</h2>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <h5>Price : $ {price}</h5>
        <button onClick={closeModal}>Continue Shoping</button>
        <button onClick={closeModal}>
          <Link to="/cart">Go To Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default Modal;
