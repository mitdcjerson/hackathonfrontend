import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <Container>
      <Card>
      <Card.Body>
        <Card.Title>Topic</Card.Title>
        <Form>
          <Form.Control className="mb-3" type="text" placeholder="Running 5km" />
          <Button variant="primary w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
        
      </Card>
    </Container>
  );
}

export default Home;