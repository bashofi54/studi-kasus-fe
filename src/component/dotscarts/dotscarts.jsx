import {
  faEllipsisV,
  faMinus,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

const Dotss = ({row, increments, decrements, deletes}) => {
  const increment = increments;
  const decrement = decrements;
  const deletee = deletes;

  const popover = (
    <Popover id="popover-positioned-bottom">
      <Popover.Body>
        <h6>jumlah</h6>
        <Container>
          <Row>
            <Col>
              <Button
                variant="outline"
                size="sm"
                onClick={() => decrement(row)}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Col>
            <Col>
              <h5>{row.qty}</h5>
            </Col>
            <Col>
              <Button
                variant="outline"
                size="sm"
                onClick={() => increment(row)}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row xl={7}>
            <Col>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => deletee(row)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </Col>
          </Row>
        </Container>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={"focus"} placement="auto" overlay={popover}>
      <Button variant="outline" size="sm">
        <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
    </OverlayTrigger>
  );
};

export default Dotss;
