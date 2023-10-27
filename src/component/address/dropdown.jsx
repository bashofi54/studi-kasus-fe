import {faEllipsisV, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";
import {API_URL} from "../../utils/constant";

function Dots({row}) {
  const delet = async () => {
    try {
      await axios.delete(API_URL + `api/delivery-addresses/${row._id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const popover = (
    <Popover>
      <Popover.Body>
        <Button variant="outline" size="sm" onClick={() => delet(row)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="focus" placement="auto" overlay={popover}>
      <Button variant="outline" size="sm">
        <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
    </OverlayTrigger>
  );
}

export default Dots;
