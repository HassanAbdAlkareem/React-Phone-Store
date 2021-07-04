import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ clearCart, cartSubTotal, cartTax, cartTotal }) => {
  return (
    <div className="main-cart-totals">
      <div className="info-totals">
        <h5>
          <span>subtotal:</span> ${cartSubTotal}
        </h5>
        <h5>
          <span>tax:</span>${cartTax}
        </h5>
        <h5>
          <span>total:</span> ${cartTotal}
        </h5>
      </div>
      <div className="clear">
        <Link to="/">
          <button onClick={clearCart}>Clear Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
