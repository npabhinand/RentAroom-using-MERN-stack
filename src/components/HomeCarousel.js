import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function HomeCarousel() {
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-50"
        src="./room.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-50"
        src="./room.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>House</h5>
        <p>description</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-50"
        src="./room.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
