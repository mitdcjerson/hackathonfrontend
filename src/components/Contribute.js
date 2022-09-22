import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useEffect, useState } from 'react';

const Contribute = () => {
    const [data, setData] = useState("");
    const [radioValue, setRadioValue] = useState('fact');

    const radios = [
        { name: 'Fact', value: 'fact' },
        { name: 'Fake', value: 'fake' },
      ];


    const handleOnChange = (event) => {
        setData(event.target.value);
    }

    const handleOnChangeRadio = (event) => {
        setRadioValue(event.currentTarget.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        let isFake = false;
        if (radioValue == "fact") {
            isFake = false;
        }
        else if (radioValue == "fake") {
            isFake = true;
        }
       
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
                                    <Form.Group className="mb-3">
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

                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={handleOnChangeRadio}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>

                                    <br />
                                    <br />

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