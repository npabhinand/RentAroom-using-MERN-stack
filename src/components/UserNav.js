import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect,useState } from 'react';
import {Link,useSearchParams} from 'react-router-dom';

 const UserNav = () => {
  const [records, setRecords] = useState([]);
  const [id] = useSearchParams();



  useEffect(()=>{
    async function getRecords(){
      const response=await fetch(`http://localhost:5000/userhome/`);
      console.log(response);
      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records= await response.json();
      console.log(records);
      setRecords(records);
    }
    getRecords();


    // console.log("ROOM ID ::: ", roomid);
    // console.log("RECORDS ::: ", records);

  }, [records.length]);
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
                <Link to={"/userprofile?userid=" +id} style={{color:"dark", textDecoration:"none"}}>Profile</Link> 
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