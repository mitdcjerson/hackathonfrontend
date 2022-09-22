import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import check from "../assets/verified.svg";
import nodata from "../assets/no-data.svg";
import uncertain from "../assets/no-data.svg";
import Status from './Status';

function Home() {
  const [ isFake, setIsFake] = useState();
  const data = {result: 48, status: "UNCERTAIN"};

  const [status, setStatus] = useState(data.status);


  function handleSubmit(){
    setIsFake(Math.round(Math.random() * 1));
    console.log("Fake", isFake)
  }


  const renderStatus = (status) => {
    
    if (status === "UNCERTAIN") {
      return (
        <Status stat={status}/>
      )
    }
    else if (status ==="FACT") {
      return (
        <Status stat={status}/>
      )
    }
    else if (status === "FAKE") {
      return (
        <Status stat={status}/>
      )
    }

  };

  return (
    <>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>Topic</Card.Title>
              <Form>
                <Form.Control className="mb-3" type="text" placeholder="Enter a phrase" />
                <Button variant="primary w-100" onClick={handleSubmit} style={{backgroundColor: "#0E4456"}}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>  
        </Col>
      </Row>
      
        
    </Container>
   
    {
      renderStatus(status)
    }

  </>
  );
}

export default Home;