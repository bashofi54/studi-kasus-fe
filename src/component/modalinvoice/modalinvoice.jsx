import React from "react";
import {Button, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";
import {numberWithCommas} from "../../utils/number";
import {useState} from "react";
import ModalEx from "./modalexit";

const Modalinvoice = ({show, handleClose, hasil, carts, users, datas}) => {
  const [onkir, setOngkir] = useState("");
  const [showEx, setShowEx] = useState(false);

  const handleCloseEx = () => setShowEx(false);
  const handleShowEx = () => setShowEx(true);

  const user = users;
  const cart = carts.cartItems;
  const data = datas;
  // console.log(data);

  const time = new Date();
  const today = new Intl.DateTimeFormat("id", {dateStyle: "full"});
  const timeToday = today.format(time);
  // console.log(timeToday);
  // console.log(onkir)
  // const total = Number(onkir) + Number(hasil);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Invoice</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={6}>
                  <address>
                    <strong>Ditagih Ke:</strong>
                    <br />
                    Eduwork food
                    <br />
                    1234 Main
                    <br />
                    No. 38
                    <br />
                    Ringroad, Yogyakarta
                  </address>
                </Col>
                <Col xs={6}>
                  <address className="text-end">
                    <strong>Dikirim Ke:</strong>
                    <br />
                    {user.full_name}
                    <br />
                    {data.detail}
                    <br />
                    {data.kelurahan}
                    <br />
                    {data.kecamatan}, {data.kabupaten}
                  </address>
                </Col>
              </Row>

              <Row>
                <Col xs={6}>
                  <address>
                    <strong>Metode Pembayaran:</strong>
                    <br />
                    Visa ending **** 4242
                    <br />
                    eduwork@email.com
                  </address>
                </Col>
                <Col>
                  <address className="text-end">
                    <strong>Tanggal Pembayaran:</strong>
                    <br />
                    {timeToday}
                    <br />
                    <br />
                  </address>
                </Col>
              </Row>
            </Col>
          </Row>

          <div class="row" size="sm">
            <div class="col-md-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <strong>Pesanan</strong>
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="table-responsive">
                    <Table class="table table-condensed">
                      <thead>
                        <tr>
                          <td>
                            <strong>Item</strong>
                          </td>
                          <td class="text-center">
                            <strong></strong>
                          </td>
                          <td class="text-center">
                            <strong>Banyaknya</strong>
                          </td>
                          <td class="text-right">
                            <strong>Total</strong>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {cart &&
                          cart.map((cart, index) => (
                            <tr key={index}>
                              <td>{cart.name}</td>
                              <td class="text-center"></td>
                              <td class="text-center">{cart.qty}</td>
                              <td class="text-right">
                                Rp. {numberWithCommas.format(cart.price)}
                              </td>
                            </tr>
                          ))}
                        <tr />
                        <tr>
                          <td class="thick-line"></td>
                          <td class="thick-line"></td>
                          <td class="thick-line text-center">
                            <strong>Subtotal</strong>
                          </td>
                          <td class="thick-line text-right">
                            Rp. {numberWithCommas.format(hasil)}
                          </td>
                        </tr>
                        <tr>
                          <td class="no-line"></td>
                          <td class="no-line">
                            <Form.Select
                              value={onkir}
                              onChange={(e) => setOngkir(e.target.value)}
                              size="sm">
                              <option value={""} disabled selected hidden>
                                Pilih Jasa Pengiriman
                              </option>
                              <option value="8000">GoSend</option>
                              <option value="9000">GrabSend</option>
                              <option value="10000">ShoppeXpess</option>
                            </Form.Select>
                          </td>
                          {/* <td class="no-line"></td> */}
                          <td class="no-line text-center">
                            <strong>Ongkos Kirim</strong>
                          </td>
                          <td class="no-line text-right">
                            Rp. {numberWithCommas.format(onkir)}
                          </td>
                        </tr>
                        <tr>
                          <td class="no-line"></td>
                          <td class="no-line"></td>
                          <td class="no-line text-center">
                            <strong>Total</strong>
                          </td>
                          <td class="no-line text-right">
                            Rp.{" "}
                            {numberWithCommas.format(
                              Number(onkir) + Number(hasil)
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleShowEx} variant="primary">
          Cetak Invoice
        </Button>
        <ModalEx
          showEx={showEx}
          handleCloseEx={handleCloseEx}
          user={user}
          carts={carts}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Modalinvoice;
