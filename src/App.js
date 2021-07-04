import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MainCart from "./Cart/MainCart";
import SingleProduct from "./components/SingleProduct";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="parent-all">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/cart">
            <MainCart />
          </Route>

          <Route exact path="/product:id">
            <SingleProduct />
          </Route>
        </Switch>
        <Modal />
      </div>
    </Router>
  );
}

export default App;
