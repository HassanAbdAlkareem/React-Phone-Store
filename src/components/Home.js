import React from "react";
import { UseGlobelContext } from "../FunctionAlContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/all";
import PropTypes from "prop-types";

const Home = () => {
  const { products, addToCart, openModal } = UseGlobelContext();

  return (
    <div className="home">
      <h1>Our Products</h1>

      <div className="row">
        {products.map((product) => {
          const { id, img, title, price, inCart } = product;

          return (
            <div key={id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div className="product">
                <Link to={`/product ${id}`}>
                  <img src={img} />
                </Link>

                <button
                  onClick={() => {
                    openModal(id);
                    addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p className="incart">in cart</p>
                  ) : (
                    <AiOutlineShoppingCart className="icon" />
                  )}
                </button>

                <div className="info">
                  <p>{title}</p>
                  <p>${price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Home.protoType = {
  Home: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
export default Home;
