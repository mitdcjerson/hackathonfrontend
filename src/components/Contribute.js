import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contribute = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log("POST! Added Contribution.")
        // const post = { 
        //     text, 
        //     result, 
        //     author_id: userId,
        //     author: props.user.username,
        //     category, 
        //     isAnonPost 
        // };

        // fetch("http://localhost:3002/infos", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(post)
        // }).then(() => {
        //     console.log("New post added");
        //     setIsPending(false);
        // })

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