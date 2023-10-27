import axios from "axios";
import React, {useState} from "react";
import {Card, Button, Col, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {API_URL} from "../../utils/constant";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL + "auth/login", {
        email: email,
        password: password,
      });
      history.push("/account");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  };

  const style = {
    width: "650px",
    margin: "149px auto ",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div style={style}>
      <Card>
        <Card.Header as="h2">Log In</Card.Header>
        <Card.Body>
          <Form onSubmit={auth}>
            <Row>
              <h5 className="text-danger text-center">{msg}</h5>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Kami tidak akan pernah membagikan email Anda kepada orang lain
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Kata sandi Anda harus terdiri dari 8-20 karakter, berisi huruf
                  dan angka, dan tidak boleh mengandung spasi, karakter khusus,
                  atau emoji.
                </Form.Text>
              </Form.Group>
            </Row>
            <hr />
            <Button type="submit">LogIn</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
