import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbar1() {
  return (




    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
    <Container>
      <Navbar.Brand ><Link to="/" style={{color:"white", textDecoration:"none"}}>RentARoom</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      
        <Nav.Link ><Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link></Nav.Link>
        <Nav.Link ><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></Nav.Link>
        <Nav.Link ><Link to="/signup" style={{color:"white", textDecoration:"none"}}>SignUp</Link></Nav.Link>
      </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

export default Navbar1;
