import React, { useState } from 'react'
import './login.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
  
    function validateForm() {
      return email.length > 0 && name.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleClick() {
        var body = JSON.stringify({
            Document: {
                name: name,
                email: email,
            },
            collection: "Users",
            database: "MongoDB"
        })
        fetch('http://localhost:5001/mongodb', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: body,
        })
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }

    return (
        <div class="login-page">
            <p class="login-message">Feel Reached.</p>
            <div class="login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                    <Form.Control
                        type="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    <Button block size="lg" type="submit" onClick={() => handleClick()} disabled={!validateForm()}>
                    Join
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
