import React from 'react'
import Sidebars from './Sidebars'
import Post from './Post'
import Container from 'react-bootstrap/Container';

function User() {
  return (
    <div className="container-fluid ">
          <Sidebars/>
          <Container>
       <Post/>
    </Container>
      </div>
           
            
  )
}

export default User;