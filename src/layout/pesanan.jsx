import React from "react";
import {Badge, Col, Container, Row} from "react-bootstrap";
import Total from "../component/total/total";
import {numberWithCommas} from "../utils/number";
import DataTable from "react-data-table-component";
import Dotss from "../component/dotscarts/dotscarts";

const Pesanan = ({carts, users, increment, decrement, delet, data}) => {
  const userss = users;
  const increments = increment;
  const decrements = decrement;
  const deletes = delet;
  const cartss = carts;
  const total = carts.cartItems.map((cart) => {
    return cart.price;
  });
  const dataAddres = data;
  const dta = carts.cartItems;

  const columns = [
    {
      cell: (row) => (
        <Container>
          <Row>
            <Col xs={1}>
              <Badge bg="success">{row.qty}</Badge>
            </Col>
            <Col>
              <strong>{row.name}</strong>
            </Col>
            <Col xs={4}>
              <>Rp.{numberWithCommas.format(row.price)}</>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      selector: (row) => (
        <Dotss
          row={row}
          cartss={cartss}
          increments={increments}
          decrements={decrements}
          deletes={deletes}
        />
      ),
      allowOverflow: true,
      button: true,
      width: "25px",
    },
  ];

  const customStyles = {
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "25px",
        outline: "1px solid #FFFFFF",
      },
    },
  };

  return (
    <Col md={3} mt="2">
      <h5>
        <strong>Pesanan</strong>
      </h5>
      <hr />
      <DataTable
        data={dta}
        customStyles={customStyles}
        columns={columns}
        highlightOnHover
        pointerOnHover
        noTableHead
      />
      keterangan
      <Total
        total={total}
        dta={dta}
        columns={columns}
        customStyles={customStyles}
        cartss={cartss}
        userss={userss}
        dataAddres={dataAddres}
      />
    </Col>
  );
};

export default Pesanan;
