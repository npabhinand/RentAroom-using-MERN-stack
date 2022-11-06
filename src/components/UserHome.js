import React from 'react'
import RoomCard from './RoomCard';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container,Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate, createSearchParams,
  useParams, useSearchParams  } from 'react-router-dom';
  import UserNav from './UserNav';



function UserHome(props) {

  
  return  (<>
  <UserNav/>

    <Container >
    <Row lg={3}>
        
      <RoomCard/>
      </Row>
    </Container>
    </>
  );
}

export default UserHome;