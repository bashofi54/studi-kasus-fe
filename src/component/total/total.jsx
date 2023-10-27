import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {numberWithCommas} from "../../utils/number";
import {useState} from "react";
import Modalinvoice from "../modalinvoice/modalinvoice";

const Total = ({
  total,
  dta,
  columns,
  customStyles,
  cartss,
  userss,
  dataAddres,
}) => {
  const users = userss;
  const dtaa = dta;
  const columnss = columns;
  const customStyless = customStyles;
  const cartsss = cartss;
  const datas = dataAddres;

  const hasil = total.reduce(function (result, item) {
    return result + item;
  }, 0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row>
      <Col>
        <hr />
        <h6 style={{marginTop: 10}}>
          Total Bayar :{" "}
          <strong style={{float: "right", marginRight: 28}}>
            Rp. {numberWithCommas.format(hasil)}
          </strong>
        </h6>
        <Button variant="primary" style={{marginTop: 5}} onClick={handleShow}>
          <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
        </Button>
        <Modalinvoice
          show={show}
          handleClose={handleClose}
          dtaa={dtaa}
          columnss={columnss}
          customStyless={customStyless}
          hasil={hasil}
          carts={cartsss}
          users={users}
          datas={datas}
        />
      </Col>
    </Row>
  );
};

export default Total;
