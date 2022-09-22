import { Button, Card, Container, Form } from "react-bootstrap";
import { useState } from "react";

function Login() {

    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    
    // function validateForm(){
    //     return name.length > 0 && password.length > 0;
    // }
    
    function handleOnSubmit(event){
        event.preventDefault();

        fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            console.log("Login success");
        })

    };

    return(
        <div className="form-container">
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control className="mb-3" type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            
                            <Button variant="primary w-100" type="submit">Sign In</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
    
};

export default Login;