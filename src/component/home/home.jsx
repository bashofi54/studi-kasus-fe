import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Button} from "react-bootstrap";
import "../../App.css";
import logo from "../../logo.svg";
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <p>
          <i>
            Pemesanan <code>Makanan & Minuman</code> EduFood
          </i>
        </p>
        <p>Hidup Madyang..!</p>
        <div>
          <Button href="/login" variant="outline">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />{" "}
            LogIn
          </Button>
          <Button href="/register" variant="outline">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />{" "}
            Regist
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
