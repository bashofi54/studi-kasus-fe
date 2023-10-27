import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";
import { NavBar } from "./layout";
import Home from "./component/home/home";
import Register from "./component/register/register";
import Footerr from "./component/footer/footer";
import axios from "axios";
import Account from "./component/account/account";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" children={() => <Home />} />
        <Route path="/login" children={() => <Login />} />
        <Route path="/menu" children={() => <App />} />
        <Route path="/register" children={() => <Register />} />
        <Route path="/account" children={() => <Account />} />
      </Switch>
      <Footerr />
    </Router>
  </React.StrictMode>
);
