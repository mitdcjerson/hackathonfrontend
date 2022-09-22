import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import "./Contribute.css"

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

        console.log("POST! Added Contribution.")
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
                <Row className="justify-content-md-center">
                    <Col sm={4}>
                        <h2>Contribute!</h2>
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
                    </Col>
                </Row>
                
            </Container>
        </div>
    
    );
};

export default Contribute;