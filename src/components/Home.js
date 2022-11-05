import React from 'react'
import Navbar1 from './Navbar1'
import RoomCard from './RoomCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCarousel from './HomeCarousel';


function Home() {
  return (
    <>
    <Row><Navbar1/></Row>
    
    <Container>
    <Row><HomeCarousel/></Row>
    <Row>
      <Col><h1>New Rooms</h1> </Col>
      
    </Row>
    <Row> <RoomCard/></Row>
    <Row>
      <Col><h1>Boys Rooms</h1> </Col>
      
    </Row>
    <RoomCard/> 
    <Row>
      <Col><h1>Girls Rooms</h1> </Col>
      
    </Row>
    <RoomCard/> 
  </Container>
  </>
  )
}

export default Home;
