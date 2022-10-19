import React from 'react'
import Sidebars from './Sidebars'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function User() {
  return (
    <div className="container-fluid ">
          <Sidebars/>
          <Container>
      <Row md={4}>
        <Col><Post/></Col>
        <Col xs={6}><Post/></Col>
        <Col><Post/></Col>
      </Row>
    </Container>
      </div>
           
            
  )
}

export default User;