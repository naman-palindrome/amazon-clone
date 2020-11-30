import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Components/Checkout";
import Home from "./Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51HoFxVBNyXpZh0ErjoQompUNKjyQOzgozpErUsWYCnpHhp4WfG3Xe0TalZKPxB7px7aGUvnDOxlfTP8JdZk0c0u100qntd32qF"
);
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
