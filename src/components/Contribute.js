import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

const Contribute = () => {
    const [data, setData] = useState("");
    const [isFake, setIsFake] = useState(false);

    const handleOnChange = (event) => {
        setData(event.target.value);
    }

    const handleOnClickFake = (event) => {
        setIsFake(!isFake);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

       
        const info = { 
            text: data, 
            type: isFake ? 0 : 1
        };

        fetch("http://localhost:3002/infos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }).then(() => {
            console.log("New contribution added!");
            console.log(info);
        })

    };

    return (
        <div className="form-container">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card className="mt-5">
                            <Card.Body>
                                <Card.Title>Contribute!</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label htmlFor="inputData">Data</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputData"
                                            aria-describedby="dataHelpBlock"
                                            value={data}
                                            onChange={handleOnChange}
                                        />
                                        <Form.Text id="dataHelpBlock" muted>
                                            Enter a phrase you want to classify as fake or not.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label="Fake"
                                            value={isFake}
                                            onClick={handleOnClickFake}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit Contribution
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Contribute;