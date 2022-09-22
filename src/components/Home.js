import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import check from "../assets/verified.svg";

function Home() {
  const [ isFake, setIsFake] = useState();
  function handleSubmit(){
    setIsFake(Math.round(Math.random() * 1));
    console.log("Fake", isFake)
  }
  return (
    <>
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>Topic</Card.Title>
          <Form>
            <Form.Control className="mb-3" type="text" placeholder="Running 5km" />
            <Button variant="primary w-100" type="submit" onClick={handleSubmit} style={{backgroundColor: "#0E4456"}}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>  
        
    </Container>
    {/* <Container className={ isFake ? "d-none" : ""}> */}
    <Container className="d-none">
    
      <Card className="mt-5">
        <Card.Body>
        <Row>
          <Col>
            <img src={check} style={{width: "100%", borderRadius: "50%"}}/>
          </Col>
          <Col className='my-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Col>
          </Row>
        </Card.Body>
      </Card>
    
  </Container>
  </>
  );
}

export default Home;