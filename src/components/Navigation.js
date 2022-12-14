import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import './Navigation.css';

function Navigation(props) {

  function handleLoginChange() {
    props.setIsLoggedIn(props.isLoggedIn);
  }

  return (
    <>
      <Navbar  variant="dark" style={{backgroundColor: "#0E4456"}}>
        <Container>
          <Link to={`/home`} className="nav-link"><img src={logo} class="image" /></Link>
            <Nav className="me-auto">
              <Link to={`/home`} className="nav-link">Home</Link>

              {
                props.isLoggedIn
                  ?
                    <Link to={`/contribute`} className="nav-link">Contribute</Link>
                  :
                    ""
              }

            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#login" className='text-white'><Link to={`/login`} className="nav-link" onClick={handleLoginChange}>{ props.isLoggedIn ? "Logout" : "Login" }</Link></Nav.Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;