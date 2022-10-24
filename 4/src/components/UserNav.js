import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect,useState } from 'react';
import { useNavigate, createSearchParams,
  useParams, useSearchParams,Link  } from 'react-router-dom';
  
 const UserNav = () => {
  const [records, setRecords] = useState([]);
  const [id] = useSearchParams();
  const navigate = useNavigate();

  return  (
    <Navbar collapseOnSelect expand="lg" value="yes" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">RentARoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/" style={{color:"dark", textDecoration:"none"}}>Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              <Link to='/userprofile' style={{color:"dark", textDecoration:"none"}}>profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <Link to="/" style={{color:"dark", textDecoration:"none"}}>logout</Link> 
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
  
export default UserNav;