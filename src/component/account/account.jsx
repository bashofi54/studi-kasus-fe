import axios from "axios";
import React, {useEffect, useState} from "react";
import {Card, Col, ListGroup, Row, Tab} from "react-bootstrap";
import {API_URL} from "../../utils/constant";
import Address from "../address/address";

const style = {
  width: "1000px",
  margin: "auto",
  marginTop: "15px",
  padding: "10px",
  borderRadius: "10px",
};

function Account() {
  const [users, setUsers] = useState("");
  // const [data, setData] = useState([]);

  useEffect(() => {
    user();
    // alamat();
  }, []);

  const user = async () => {
    try {
      const response = await axios.get(API_URL + "auth/me");
      setUsers(response.data);
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  // const alamat = async () => {
  //   try {
  //     const response = await axios.get(API_URL + "api/delivery-addresses");
  //     setData(response.data.data[0]);
  //     // console.log(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div style={style}>
      <Card>
        <Card.Header as="h5">Account Log In: {users.full_name}</Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="#Alamat">
            <Row>
              <Col sm={3}>
                <ListGroup>
                  <ListGroup.Item action href="#Alamat">
                    Alamat
                  </ListGroup.Item>
                  <ListGroup.Item action href="#Profil">
                    Profil
                  </ListGroup.Item>
                  <ListGroup.Item action href="/menu">
                    Lanjut Memesan
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="#Alamat">
                    <Address />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#Profil">
                    <div>
                      <h5>ID: {users.customer_id}</h5>
                      <h6>Nama: {users.full_name}</h6>
                      <h6>Email: {users.email}</h6>
                      <h6>Role: {users.role}</h6>
                      {/* <h6>
                        Alamat: {data.detail}, {data.kelurahan},{" "}
                        {data.kecamatan}, {data.kabupaten}
                      </h6> */}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
