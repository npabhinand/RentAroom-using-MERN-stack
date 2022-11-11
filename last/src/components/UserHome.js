import React from 'react'
import RoomCard from './RoomCard';
import {Container,Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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