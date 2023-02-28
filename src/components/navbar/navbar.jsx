import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-success fs-2'>ZooN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='me-2 btn btn-lightbtn btn-outline-secondary'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className=' me-2 btn btn-lightbtn btn-outline-secondary'>About</Nav.Link>
            <Nav.Link as={Link} to="/shop" className='me-2 btn btn-lightbtn btn-outline-secondary'>Shop</Nav.Link>
            <Nav.Link as={Link} to="/counter" className='me-2 btn btn-lightbtn btn-outline-secondary'>Counter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;