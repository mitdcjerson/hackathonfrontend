import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import check from "../assets/verified.svg";
import nodata from "../assets/no-data.svg";
import uncertain from "../assets/no-data.svg";

function Home() {
  const [ isFake, setIsFake] = useState();
  const data = {result: 48, status: "FACT"};

  const [status, setStatus] = useState(data.status);


  function handleSubmit(){
    setIsFake(Math.round(Math.random() * 1));
    console.log("Fake", isFake)
  }


  const renderStatus = (status) => {
    
    if (status === "UNCERTAIN") {
      return (
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="mt-5">
                <Card.Body>
                  <Row>
                    <Col>
                      <img src={uncertain} style={{width: "100%"}}/>
                    </Col>
                    <Col className='my-auto text-center'>
                      <Card.Title>Status: <div className='fw-bold text-warning d-inline'>Uncertain</div></Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )
    }
    else if (status ==="FACT") {
      return (
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Card className="mt-5">
              <Card.Body>
              <Row>
                <Col>
                  <img src={check} style={{width: "100%"}}/>
                </Col>
                <Col className='my-auto text-center'>
                <Card.Title>Status: <div className='fw-bold text-success d-inline'>Fact</div></Card.Title>
                  <Card.Text className='fs-1 fw-bold text-success'>
                    59%
                  </Card.Text>
                </Col>
                </Row>
              </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
      )
    }
    else if (status === "FAKE") {
      return (
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="mt-5">
                <Card.Body>
                  <Row>
                    <Col>
                      <img src={nodata} style={{width: "100%"}}/>
                    </Col>
                    <Col className='my-auto text-center'>
                    <Card.Title>Status: <div className='fw-bold text-danger d-inline'>Fake</div></Card.Title>
                      <Card.Text className='fs-1 fw-bold text-danger'>
                        47%
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
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