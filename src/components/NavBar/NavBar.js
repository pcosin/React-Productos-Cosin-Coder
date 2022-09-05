import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import logo from "./../../logo.jpg"

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className=''>
      <NavLink to="/"><img className='logo' src={logo} alt="" /></NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-links'>
          <Nav className="mx-auto">
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink className="navlink" to="categoria/autos">Autos</NavLink></NavDropdown.Item>
              <NavDropdown.Item>          <NavLink className="navlink" to="categoria/otros">Otros</NavLink>
              </NavDropdown.Item>
              </NavDropdown>
          
          </Nav>
          <NavLink className="navlink carritoNavBar" to="/cart"><CartWidget /></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

