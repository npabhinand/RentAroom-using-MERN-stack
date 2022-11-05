// import React , {useState, useEffect} from 'react'
import UserNav from './UserNav';
import RoomCard from './RoomCard';
import {Container ,Col ,Row} from 'react-bootstrap';



function UserHome() {


  return (
  
    <>
    <Row><UserNav/></Row>
    <Container>
    <Row>
      <RoomCard/>
    </Row>
    </Container>
    </>
  );
}

export default UserHome;