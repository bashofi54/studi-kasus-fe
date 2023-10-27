import {Col, ListGroup} from "react-bootstrap";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {API_URL} from "../utils/constant";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheese,
  faCoffee,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({name}) => {
  if (name === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (name === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (name === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;
  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

const ListCategories = ({chngCate}) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    retCategories();
  }, []);

  const retCategories = async () => {
    try {
      const res = await axios.get(API_URL + "api/categories");
      // console.log(res.data)
      setCategories(res.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Col md={2} mt="2">
      <h5>
        <strong>Daftar Kategori</strong>
      </h5>
      <hr />
      <ListGroup as="ul">
        {categories &&
          categories.map((category, index) => (
            <ListGroup.Item
              as="li"
              key={index}
              onClick={() => chngCate(category.name)}
              style={{cursor: "pointer"}}
              href={`#${category.name}`}>
              <h6>
                <Icon name={category.name} /> {category.name}
              </h6>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Col>
  );
};
export default ListCategories;
