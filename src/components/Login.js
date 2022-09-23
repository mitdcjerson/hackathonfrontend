import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import '../App.css';
const sha256 = require('js-sha256');

function Login(props) {

    const [uName, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [isError, setError] = useState();

    function validateForm(){
        return uName.length > 0 && pass.length > 0;
    };

    async function loginUser(credentials) {
        const userData = {
            username: uName,
            password: sha256(pass)
        };
        console.log("User login", userData);

        return fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(data => data.json())
    }

    
    async function handleOnSubmit(event){
        event.preventDefault();

        const response = await loginUser({uName, pass});
        console.log("response ", response);

        if (response === 1){
            console.log("success");
            setError(false);
            props.setIsLoggedIn(true);

        } else if (response === 0){
            console.log("failed");
            setError(true);
            props.setIsLoggedIn(false);
        }

    };

    return(
        <div className="form-container">
            {
                props.isLoggedIn ? <Navigate to="/contribute" replace /> : ""
            }
             
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                    className="mb-3" 
                                    type="text" 
                                    placeholder="Username" 
                                    value={uName} 
                                    onChange={(e) => setUsername(e.target.value)}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    className="mb-3" 
                                    type="password" 
                                    placeholder="Password" 
                                    value={pass} 
                                    onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>
                                
                                <Button variant="primary w-100" type="submit" style={{backgroundColor: "#0E4456"}} disabled={!validateForm()}>Sign In</Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    {
                        isError ? <Alert className="mt-3" variant="danger" onClose={() => setError(false)} dismissible>
                            <p>Login failed. Please try again.</p>
                        </Alert> : ""
                    }

                    </Col>
                </Row>
            </Container>
        </div>
    );
    
};

export default Login;