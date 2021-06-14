import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MainCart from "./Cart/MainCart";
import SingleProduct from "./components/SingleProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="parent-all">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
