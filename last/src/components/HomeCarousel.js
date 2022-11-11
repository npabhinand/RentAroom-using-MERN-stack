import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function HomeCarousel() {
  return (
    <Carousel fade variant="dark" >
    <Carousel.Item >
      <img
        className="d-block"
        src="./house.jpg"
        alt="Error Occurred"
        style={{height:"500px" ,width:"1500px"}}/>
      <Carousel.Caption>
        <h5>RentARoom Near CET</h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src="./livingroom.jpg"
        alt="error occurred "
        style={{height:"500px" ,width:"1500px"}}/>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="./room.jpg"
        style={{height:"500px" ,width:"1500px"}}  alt="Error Occurred"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
