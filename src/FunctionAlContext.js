import React, { createContext, useContext, useEffect, useState } from "react";
import { storeProducts } from "./Data";

const AlContext = createContext();

const FunctionAlContext = ({ children }) => {
  const [products, setProducts] = useState(storeProducts);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState([]);

  // state For cart totals
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getSingleProduct = (id) => {
    const tempProduct = [...products];
    const Product = tempProduct.find((item) => item.id == id);
    return Product;
  };
  const openModal = (id) => {
    const product = getSingleProduct(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
  };

  const increment = (id) => {
    let tempCart = [...cart];
    tempCart.find((item) => {
      if (item.id === id) {
        item.count += 1;
        item.total = item.total + item.price;
      }
    });
    setCart(tempCart);
  };
  const decrement = (id) => {
    let tempCart = [...cart];
    tempCart.find((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.total = item.total - item.price;
      }
      if (item.count <= 0) {
        item.count = 0;
        item.total = 0;
      }
    });

    setCart(tempCart);
  };

  const removeItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
    let tempProduct = [...products];
    tempProduct.map((item) => (item.id === id ? (item.inCart = false) : true));
  };

  const clearCart = () => {
    setCart([]);
    let tempProduct = [...products];
    tempProduct.map((item) => (item.inCart = false));
  };

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartTax(tax);
    setCartSubTotal(subTotal);
    setCartTotal(total);
  };

  useEffect(() => {
    addTotals();
  }, [cart]);

  //
  return (
    <AlContext.Provider
      value={{
        //this is my state
        products,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartTax,
        cartTotal,
        // this is my functions
        getSingleProduct,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AlContext.Provider>
  );
};

// custom context
const UseGlobelContext = () => {
  return useContext(AlContext);
};

export { FunctionAlContext, UseGlobelContext };
