import React from "react";
import { UseGlobelContext } from "../FunctionAlContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const MainCart = () => {
  const { cart, clearCart, cartSubTotal, cartTotal, cartTax } =
    UseGlobelContext();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h4>your cart is currently empty.</h4>
        <Link className="" to="/">
          back to Home
        </Link>
      </div>
    );
  }
  return (
    <div className="main-cart">
      <h1 className="title-cart">Your Cart</h1>
      {cart.map((item) => (
        <CartList key={item.id} {...item} />
      ))}
      <CartTotals
        clearCart={clearCart}
        cartSubTotal={cartSubTotal}
        cartTotal={cartTotal}
        cartTax={cartTax}
      />
    </div>
  );
};

export default MainCart;
