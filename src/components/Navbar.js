import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/">
          <h4>Products</h4>
        </Link>
      </div>
      <div className="right">
        <Link to="/cart">
          <h4>My Cart</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
