import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidjet from './CartWidjet';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className=''>
        <Navbar.Brand href="#home">Jardín de Gente</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-links'>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <CartWidjet />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

