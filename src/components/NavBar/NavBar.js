import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className=''>
      <NavLink to="/"><img className='logo' src="img/logo.jpg" alt="" /></NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-links'>
          <Nav className="mx-auto">
          <NavLink className="navlink" to="categoria/autos">Autos</NavLink>
          <NavLink className="navlink" to="categoria/otros">Otros</NavLink>

          </Nav>
          <NavLink className="navlink carritoNavBar" to="/cart"><CartWidget /></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

