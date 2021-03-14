import React, { useState } from 'react'
import './login.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
        <div class="login-page">
            <p class="login-message">Feel Reached.</p>
            <div class="login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login/Signup
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
