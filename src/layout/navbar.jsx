import {
  faArrowAltCircleRight,
  faHouse,
  faListSquares,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {API_URL} from "../utils/constant";

const Icon = ({name}) => {
  if (name === "home") return <FontAwesomeIcon icon={faHouse} />;
  if (name === "menu")
    return <FontAwesomeIcon icon={faListSquares} className="mr-2" />;
  if (name === "profile")
    return <FontAwesomeIcon icon={faUser} className="mr-2" />;
  // return <FontAwesomeIcon icon={faUtensils} className="mr-2" />
};

const NavBar = () => {
  const history = useHistory();

  const logout = async () => {
    try {
      await axios.delete(API_URL + "auth/logout");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://eduwork.id/images/logo3.png"
              alt="lgo"
              style={{height: "25px"}}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: "100px"}}
              navbarScroll>
              <Nav.Link href="/">
                <Icon name="home" /> Home{" "}
              </Nav.Link>
              <Nav.Link href="/menu">
                <Icon name="menu" /> Menu
              </Nav.Link>
              <Nav.Link href="/account">
                <Icon name="profile" /> Profil
              </Nav.Link>
            </Nav>
            <Form>
              <Form.Control
                type="search"
                placeholder="Cari"
                aria-label="Cari"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
        <Button
          onClick={logout}
          variant="outline-danger"
          style={{marginRight: "50px"}}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} /> LogOut{" "}
        </Button>
      </Navbar>
    </div>
  );
};

export default NavBar;
