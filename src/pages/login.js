import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (username === "jsk_cashier2" && password === "Trauma@123")  {
            history.push("/billing");
        } else if(username === "admin" && password === "Vishal@123")  {
            history.push("/billing");
        }
         else {
            <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            </Alert>
        }

    }

    return (
        <div className="login">
            <Container className="login-container">
                <div className="avatar"></div>
                <Form onSubmit={handleSubmit} className="form-box">
                    <Form.Group size="lg" controlId="username">
                        <Form.Control
                            autoFocus
                            type="input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        <FontAwesomeIcon icon={faSignInAlt} />  Login & Rock!
                </Button>
                </Form>
            </Container>
            <div className="blink">
                <Button className="pos-update-btn">New updates</Button>
            </div>
            <Button className="pos-help-btn">Need Help</Button>
        </div>
    );
}