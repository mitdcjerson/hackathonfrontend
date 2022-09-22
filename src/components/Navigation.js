import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import './Navigation.css';

function Navigation(props) {

  return (
    <>
      <Navbar  variant="dark" style={{backgroundColor: "#0E4456"}}>
        <Container>
          <Navbar.Brand href="#home"><Link to={`/home`} className="nav-link"><img src={logo} class="image"></img></Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to={`/home`} className="nav-link">Home</Link></Nav.Link>

              {
                props.isLoggedIn
                  ?
                    <Nav.Link href="#features"><Link to={`/contribute`} className="nav-link">Contribute</Link></Nav.Link>
                  :
                    ""
              }

            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#login" className='text-white'><Link to={`/login`} className="nav-link">Login</Link></Nav.Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;