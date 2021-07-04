import React from "react";
import { UseGlobelContext } from "../FunctionAlContext";
import { FaTrash } from "react-icons/all";

const CartList = (item) => {
  const { increment, decrement, removeItem } = UseGlobelContext();
  const { id, title, img, price, total, count } = item;
  // console.log(count);
  return (
    <div className="item">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <img src={img} className="img" />
        </div>
        <div className="col-10 mx-auto col-lg-2 product">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            product :
          </span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 price">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>price :</span>$
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div onClick={() => removeItem(id)}>
            <FaTrash className="icon" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>Item Total: ${total}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartList;
