import React, { createContext, useContext, useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./Data";

const AlContext = createContext();

const FunctionAlContext = ({ children }) => {
  const [products, setProducts] = useState(storeProducts);
  const [detailProducts, setdetailProducts] = useState(detailProduct);
  const [cart, setCart] = useState([]);

  const getSingleProduct = (id) => {
    const tempProduct = [...products];
    const Product = tempProduct.find((item) => item.id == id);
    return Product;
  };

  const addToCart = (id) => {
    let tempProduct = [...products];
    const index = tempProduct.indexOf(getSingleProduct(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProduct);
    setCart([...cart, product]);
    console.log(cart);
  };

  //
  const openModel = (id) => {};
  return (
    <AlContext.Provider
      value={{
        products,
        setProducts,
        detailProducts,
        getSingleProduct,
        addToCart,
        openModel,
      }}
    >
      {children}
    </AlContext.Provider>
  );
};
const useGlobelContext = () => {
  return useContext(AlContext);
};

export { FunctionAlContext, useGlobelContext };
