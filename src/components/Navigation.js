import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {

  const handleOnClick = (page) => {
    props.setPage(page);
  };

  return (
    <>
      <Navbar  variant="dark" style={{backgroundColor: "#0E4456"}}>
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleOnClick("home")}>Home</Nav.Link>
              <Nav.Link href="#features" onClick={() => handleOnClick("contribute")}>Contribute</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login" onClick={() => handleOnClick("login")}>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;