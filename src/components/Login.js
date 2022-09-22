import { Button, Card, Container, Form } from "react-bootstrap";
import { useState } from "react";

function Login() {

    const [uName, setUsername] = useState([]);
    const [pass, setPassword] = useState([]);
    
    function handleOnSubmit(event){
        event.preventDefault();

        const userData = {
            username: uName,
            password: pass
        };
        console.log("User login", userData);

        fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(() => {
            console.log("Login ", userData);
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
                                <Form.Control className="mb-3" type="text" placeholder="Username" value={uName} onChange={(e) => setUsername(e.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)}/>
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