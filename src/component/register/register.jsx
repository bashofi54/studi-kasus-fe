import React, { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../utils/constant'
import { useHistory } from 'react-router-dom'
import { Card, Button, Col, Form, Row } from 'react-bootstrap'

function Register() {
    // const [validated, setValidated] = useState(false)
    // const histoy = useHistory()

    // const handleSubmit = async (event) => {
    //     const form = event.currentTarget
    //     if (form.checkValidity() === false) {
    //         event.preventDefault()
    //         event.stopPropagation()
    //     }
    //     setValidated(true)
    //     alert(`
    //     Nama : ${myVal.namaDpn}
    //     Email : ${myVal.email}
    //     Password : ${myVal.psswrd}
    //     `)
    //     try {
    //         await axios.post(
    //             API_URL + 'auth/register',
    //             `
    //         Nama : ${myVal.namaDpn},
    //         Email : ${myVal.email},
    //         Password : ${myVal.psswrd},
    //         `,
    //         )
    //         histoy.push('/login')
    //     } catch (err) {
    //         console.log(err, 'error axios')
    //     }
    // }

    // const [myVal, setMyVal] = useState({
    //     namaDpn: '',
    //     email: '',
    //     psswrd: '',
    // })

    // const handleInputChange = (event) => {
    //     setMyVal({
    //         ...myVal,
    //         [event.currentTarget.name]: event.currentTarget.value,
    //     })
    // }

    // // const submi = (event) => {
    // //     event.preventDefault();
    // // }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    // const [msg, setMsg] = useState('');
    const history = useHistory();

    const regist = async(e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL + 'auth/register',{
                full_name: name,
                email: email,
                password: password,
                role: role
            });
            history.push('/login');
        } catch (error) {
            console.log(error.response)
        }
    }

    const style = {
        width: '650px',
        margin: '102px auto',
        padding: '10px',
        borderRadius: '10px',
    }

    return (
        <div style={style}>
            <Card>
                <Card.Header as="h2">Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={regist}>
                        <Row className="mb-4">
                            <Form.Group>
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control
                                    // required
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    // required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    Kami tidak akan pernah membagikan email Anda kepada orang lain
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    // required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Kata sandi Anda harus terdiri dari 8-20 karakter, berisi huruf
                                    besar dan angka, dan tidak boleh mengandung spasi, karakter
                                    khusus, atau emoji.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} md='6'>
                                <Form.Label>Role</Form.Label>
                                <Form.Select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}>
                                    <option value={''} disabled selected hidden>
                                    Pilih Pengguna
                                    </option>
                                    <option>user</option>
                                    <option>admin</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <hr/>
                        <Button type="submit">Regist</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

// render(<Register />);

export default Register
