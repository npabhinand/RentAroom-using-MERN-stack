import React from 'react'
import Navbar1 from './Navbar1'
import HomeRoom from './HomeRoom';
import HomeBoysRoom from './HomeBoysRoom';
import HomeGirlsRoom from './HomeGirlsRoom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCarousel from './HomeCarousel';


function Home() {
  return (
    <>
    
    <Row><Navbar1/></Row>
    <br/>
    <Container>
    <Row><HomeCarousel/></Row>
    <Row >
    <br/>
      <Col><h1>New Rooms</h1> </Col>
      
    </Row>
    <Row  lg={3}> <HomeRoom/></Row>
    <Row lg={3}>
    <br/>
      <h1>Boys Rooms</h1> 
      
    </Row ><Row lg={3}><HomeBoysRoom/></Row>
     
    <Row >
      <Col><h1>Girls Rooms</h1> </Col>
      
    </Row>
    <Row  lg={3}><HomeGirlsRoom/></Row>
     
  </Container>
  </>
  )
}

export default Home;
