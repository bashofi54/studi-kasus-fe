import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import "../../App.css";

export default class Footerr extends React.Component {
  render() {
    return (
      <div className="App text-center">
        <footer className="foot">
          <label>
            <FontAwesomeIcon icon={faCopyright} /> <strong>EduWork</strong>{" "}
            <ins>2023</ins>
          </label>
        </footer>
      </div>
    );
  }
}
