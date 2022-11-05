import React from 'react'
import RoomCard from './RoomCard';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container,Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate, createSearchParams,
  useParams, useSearchParams  } from 'react-router-dom';



function UserHome(props) {

  
  const [records, setRecords] = useState([]);
  const [id] = useSearchParams();
  const navigate = useNavigate();
  const userpass = () => {
    console.log("student redirecting");
      navigate({
        pathname: "/userprofile",
        search: createSearchParams({
          id: id
        }).toString()
      });
  }

  useEffect(()=> {
    async function getRecords() {
      const response = await fetch (`http://localhost:5000/user/`);
      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      console.log(records);
      setRecords(records);
    }
    getRecords();
    console.log(records);
  }, [records.length]);
  return  (<
    div>
    <Navbar collapseOnSelect expand="lg" value="yes" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">RentARoom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item >
                <Link to="/" style={{color:"dark", textDecoration:"none"}}>Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <a onClick={userpass}>profile</a>

              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link to="/" style={{color:"dark", textDecoration:"none"}}>logout</Link> 
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container >
    <Row lg={3}>
        
      <RoomCard/>
      </Row>
    </Container>
    </div>
  );
}

export default UserHome;