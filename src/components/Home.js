import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Status from './Status';

function Home() {
  const [ topic, setTopic ] = useState("");
  const data = {result: 48, status: "UNCERTAIN"};

  const [status, setStatus] = useState(data.status);

  const handleOnChange = (event) => {
    setTopic(event.target.value);
  }

  function handleSubmit(){
    
    const topicObj = {
      text: topic
    };

    fetch("http://localhost:3002/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(topicObj)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log("Topic requested.");
        console.log(topicObj);
        console.log(result);
        setStatus(result.status);
    })


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
                <Form.Control className="mb-3" type="text" placeholder="Enter a phrase" value={topic} onChange={handleOnChange}/>
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