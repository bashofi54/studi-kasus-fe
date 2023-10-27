import React from "react";
import {Col, Card, Button} from "react-bootstrap";
import {numberWithCommas} from "../../utils/number";

const Products = ({products, cartss}) => {
    return (
        <Col md={4} xs={6} className="mb-4">
        <Card className="shadow">
            <Card.Img
            variant="top"
            src={`http://localhost:3001/images/products/${products.image_url}`}
            />
            <Card.Body>
            <Card.Title>{products.name}</Card.Title>
            <Card.Text>Rp.{numberWithCommas.format(products.price)}</Card.Text>
            <Button onClick={() => cartss(products)} variant="primary">
                Pesan
            </Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Products;
