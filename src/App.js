import axios from "axios";
import React, {useEffect, useReducer, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import swal from "sweetalert";
import Products from "./component/card/card";
import {ListCategories, Pesanan} from "./layout";
import {API_URL} from "./utils/constant";

function App() {
  const [users, setUsers] = useState("");
  const [productss, setProductss] = useState();
  const [finds, setFinds] = useState("Makanan");
  const [carts, setCarts] = useState();
  const [orders, setOrders] = useState();
  const [data, setData] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    retProducts();
    user();
    orderss();
    address();
  }, [ignored]);

  const user = async () => {
    try {
      const response = await axios.get(API_URL + "auth/me");
      setUsers(response.data);
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const retProducts = async () => {
    try {
      const res = await axios.get(API_URL + "api/products");
      setProductss(res.data.data);
      // console.log(res.data.data);
    } catch (err) {
      alert(err);
    }
  };

  const chngCate = async (val) => {
    setFinds({finds: val});
    try {
      const res = await axios.get(API_URL + "api/products?category=" + val);
      // console.log(res.data.data)
      setProductss(res.data.data);
    } catch (err) {
      alert(err);
    }
  };

  const cartss = async (val) => {
    // console.log("Menu :", val);
    const cartt = {
      cartItems: [{productId: val._id, name: val.name, price: val.price}],
    };
    try {
      await axios.post(API_URL + "api/carts", cartt);
      setCarts((res) => {
        swal({
          title: "Selamat!",
          text: "Anda berhasil memesan" + val.name,
          icon: "success",
          button: false,
          timer: 1500,
        });
      });
      forceUpdate();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const increment = async (val) => {
    // console.log("Menu :", val);
    const cartt = {
      cartItems: [{productId: val.productId, name: val.name, price: val.price}],
    };
    try {
      await axios.post(API_URL + `api/carts/increment/${val.productId}`, cartt);
      forceUpdate();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const decrement = async (val) => {
    // console.log("Menu :", val);
    const cartt = {
      cartItems: [{productId: val.productId, name: val.name, price: val.price}],
    };
    try {
      await axios.post(API_URL + `api/carts/decrement/${val.productId}`, cartt);
      forceUpdate();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const delet = async (val) => {
    // console.log("Menu :", val);
    const cartt = {
      cartItems: [{productId: val.productId}],
    };
    try {
      await axios.post(API_URL + `api/carts/${val.productId}`, cartt);
      forceUpdate();
    } catch (err) {
      // console.log(err)
    }
  };

  const orderss = async () => {
    try {
      const res = await axios.get(API_URL + "api/carts");
      setOrders(res.data);
      // console.log("carts", res.data);
    } catch (err) {
      alert(err);
    }
  };

  const address = async () => {
    try {
      const response = await axios.get(API_URL + "api/delivery-addresses");
      setData(response.data.data[0]);
      // console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  };

  console.log(carts);
  // console.log(data._id);

  return (
    <div className="App">
      <div className="mt-3">
        <Container fluid style={{marginBottom: "35px"}}>
          <hr />
          <h6 className="mt-3">
            Selamat Memesan : {users.role}{" "}
            <input
              placeholder="Anda Belum Log In"
              style={{border: "none"}}
              defaultValue={users.full_name}
            />
          </h6>
          <hr />
          <Row>
            <ListCategories chngCate={chngCate} finds={finds} />
            <Col>
              <h5>
                <strong>Daftar Produk</strong>
              </h5>
              <hr />
              <Row>
                {productss &&
                  productss.map((products, index) => (
                    <Products key={index} products={products} cartss={cartss} />
                  ))}
              </Row>
            </Col>
            {orders &&
              orders.map((carts, index) => (
                <Pesanan
                  key={index}
                  carts={carts}
                  users={users}
                  increment={increment}
                  decrement={decrement}
                  delet={delet}
                  data={data}
                />
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
