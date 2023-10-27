import axios from "axios";
import React from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {API_URL} from "../../utils/constant";

const ModalEx = ({showEx, handleCloseEx, carts, user}) => {
  // console.log(carts.userId)
  const history = useHistory();

  const logout = async () => {
    try {
      await axios.delete(API_URL + "auth/logout");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const more = async () => {
    try {
      await axios.put(API_URL + `api/carts/${carts.userId}`, {cartItem: []});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={showEx}
      onHide={handleCloseEx}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body closeButton>
        <Container>
          <div class="text-center">
            <h4>Selamat {user.full_name}</h4>
            <p>Pesanana Anda sedang dalam proses</p>
            <p>Terimakasih sudah memesan di restoran kami</p>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseEx} variant="secondary">
          Kembali
        </Button>
        <Button onClick={logout} variant="danger">
          Keluar
        </Button>
        <Button onClick={more} href={"/menu"} variant="primary">
          Pesan Kembali
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEx;
