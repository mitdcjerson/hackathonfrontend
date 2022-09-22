import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import check from "../assets/verified.svg";
import nodata from "../assets/no-data.svg";

function Home() {
  const [ isFake, setIsFake] = useState();
  function handleSubmit(){
    setIsFake(Math.round(Math.random() * 1));
    console.log("Fake", isFake)
  }
  return (
    <>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
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
        </Col>
      </Row>
      
        
    </Container>
    <Container>
    <Row>
        <Col md={{ span: 6, offset: 3 }}>
    {/* <Container className="d-none"> */}
      {
        isFake ?
        <Card className="mt-5">
        <Card.Body>
        <Row>
          <Col>
            <img src={check} style={{width: "100%"}}/>
          </Col>
          <Col className='my-auto'>
            <Card.Title>Its True</Card.Title>
            <Card.Text muted>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
          </Row>
        </Card.Body>
      </Card>
      :
      <Card className="mt-5">
        <Card.Body>
        <Row>
          <Col>
            <img src={nodata} style={{width: "100%"}}/>
          </Col>
          <Col className='my-auto'>
          <Card.Title>Its Fake</Card.Title>
          <Card.Text muted>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          </Col>
          </Row>
        </Card.Body>
      </Card>
      }
      </Col>
      </Row>
      
    
  </Container>
  </>
  );
}

export default Home;