import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row, Alert, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Contribute = () => {
    const alertObj = {
        type: "",
        message: ""
    };

    const [data, setData] = useState("");
    const [radioValue, setRadioValue] = useState("");
    const [alert, setAlert] = useState(alertObj);
    const [showAlert, setShowAlert] = useState("");

    const radios = [
        { name: 'Fact', value: 'fact' },
        { name: 'Fake', value: 'fake' },
      ];

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShowAlert("d-none");
            console.log("USE EFFECT");
        }, 2000)
    
        return () => {
        clearTimeout(timeId)
        setShowAlert("");
        }
    }, [alert]);

    const handleOnChange = (event) => {
        setData(event.target.value);
    }

    const handleOnChangeRadio = (event) => {
        setRadioValue(event.currentTarget.value);
    }

    const renderAlert = (alertParam) => {
        if (alertParam.type == "error") {
            return (
                <Alert variant="danger" className={`mt-3 ${showAlert}`}>
                    {alertParam.message}
                </Alert>
            );
        }
        else if (alertParam.type == "success") {
            return (
                <Alert variant="info" className={`mt-3 ${showAlert}`}>
                    {alertParam.message}
                </Alert>
            );
        }
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        let error = false;
        let isFake = null;

        
        if (radioValue == "fact" && data != null) {
            isFake = false;
        }
        else if (radioValue == "fake" && data != null) {
            isFake = true;
        }
        else {
            error = true;
            console.log("Please identify if data is Fact or Fake.");
            setAlert({ type: "error", message: "Please identify if data is Fact or Fake." });
        }
        
        if (!data) {
            error = true;
            console.log("Please input data.");
            setAlert({ type: "error", message: "Please input data." });
        }
        const info = { 
            text: data, 
            type: isFake ? 0 : 1
        };

        if (!error) {
            fetch("http://localhost:3002/infos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info)
            }).then(() => {
                console.log("New contribution added!");
                console.log(info);
                setData("");
                setRadioValue("");
                setAlert({ type: "success", message: "New contribution added!" });
            })
        }

    };

    return (
        <div className="form-container">
            <Container>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row className='mb-2'>
                                    <Card.Title>Contribute!</Card.Title>
                                </Row>

                                <Row className='mb-2'>
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
                                            Enter a phrase you want to classify as fact or fake.
                                        </Form.Text>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-5'>
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
                                </Row>

                                <Row>
                                    <Button variant="primary" type="submit"  style={{backgroundColor: "#0E4456"}}>
                                        Submit Contribution
                                    </Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>

                    {
                        renderAlert(alert)
                    }
                    
                </Col>
            </Container>
        </div>
    );
};

export default Contribute;