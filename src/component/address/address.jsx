import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody} from "react-bootstrap";
import DataTable from "react-data-table-component";
import {API_URL} from "../../utils/constant";
import AddAddress from "../addadress/addadress";
import Dots from "./dropdown";

function Address() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    alamat();
  }, []);

  const alamat = async () => {
    try {
      const response = await axios.get(API_URL + "api/delivery-addresses");
      setData(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };

  const dta = data;
  const columns = [
    {
      name: "Tempat Tujuan",
      selector: (row) => row.nama,
      grow: 1,
      style: {
        color: "#202124",
        fontSize: "14px",
        fontWeight: 530,
      },
    },
    {
      name: "Detail",
      cell: (row) =>
        `${row.detail}, ${row.kelurahan}, ${row.kecamatan}, ${row.kabupaten}, ${row.provinsi}`,
    },
    {
      selector: (row) => <Dots row={row} />,
      allowOverflow: true,
      button: true,
      width: "56px",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        border: "none",
      },
    },
    headCells: {
      style: {
        color: "#202124",
        fontSize: "14px",
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "25px",
        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
  };

  return (
    <div>
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        Tambahkan Alamat Anda Dahulu
      </Button>
      <hr />

      <Modal show={show} onHide={handleClose}>
        <ModalBody>
          <Modal.Header closeButton>
            <Modal.Title>Isikan Alamat Anda</Modal.Title>
          </Modal.Header>
          <AddAddress hand={handleClose} />
        </ModalBody>
      </Modal>

      <DataTable
        columns={columns}
        data={dta}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
}

export default Address;
