import React from 'react'
import {Carousel, Button,Row,Col} from 'react-bootstrap';
import UserNav from './UserNav';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Roomdetails(props) {
  const userId = localStorage.getItem("userId");
  const { search } = useLocation();
  const roomid = new URLSearchParams(search).get("roomid")
  const data = roomid.split('?')
  console.log("------blah-----"+data[0])
  console.log("=====blah====="+data[1].substring(2))
  const [records, setRecords] = useState([]);

    const handleClick  = async (e) => {
      e.preventDefault();
      console.log(records)
      const status=window.confirm("Do you want to reserve room?")
      if(status){
        const datas = {roomid: records._id, userid: userId,ownerId:records.ownerId};
        const result = await fetch("http://localhost:5000/reserve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datas),
        }).then(
          result => result.json()
        );
      }
      window.location.reload()
    }



  useEffect(()=>{
    async function getRecords(){
      const response=await fetch(`http://localhost:5000/addroom/${roomid}`);
      console.log("response",response);
      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records= await response.json();
      console.log("records",records);
      setRecords(records);
    }
    getRecords();


  }, [records.length]);

  console.log(records)
  return (
    <>
  <UserNav/>
  <br/>
  <div className='container square border border-dark w-75'>
   <div className='d-flex justify-content-center'>

   <Carousel variant="dark d-block w-75 h-75 text-center">
    <Carousel.Item className="text-center">
    
      <img
        className="d-block w-100 "
        src={`http://localhost:5000/uploads/${records.image && records?.image[0]}`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>House</h5>
        <p>description</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`http://localhost:5000/uploads/${records.image && records?.image[1]}`}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>House</h5>
        <p>description</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`http://localhost:5000/uploads/${records.image && records?.image[2]}`}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>House</h5>
        <p>
          description
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   </div>
 
  <hr/>
  <p className='h3'>DETAILS</p>
  <Row>
    <Col className='h6'>House Name:</Col>
    <Col>{records.property_name}</Col>
    <Col className='h6'>Types:</Col>
    <Col>{records.types==="house"?"House":"Room"}</Col>
    
  </Row>
  <Row>
    <Col className='h6'>Price:</Col>
    <Col>{records.rate}</Col>
    <Col className='h6'>Accomodation For: </Col>
    <Col>{records.accomodation_for}</Col>
  </Row>
  <Row>
  <Col className='h6'>Total Inmates:</Col>
    <Col>{records.total_inmates}</Col>
    <Col className='h6'>Furnishing:</Col>
    <Col>{records.furniture}</Col> 
  </Row>
  <Row>
    <Col className='h6'>Bathroom type:</Col>
    <Col>{records.bathroom_type}</Col>
    <Col className='h6'>Phone:</Col>
    <Col>{records.phone}</Col>
  </Row>
  <hr/>
  <p> <b>Description:</b> {records.description}</p>
  
  <p> <b>Status:</b> {records.status==="reserved"?"Room is already enquired.Please check after sometime":"Available"}</p>
 <form onSubmit={handleClick}>
  <div className='text-center'><Button disabled={records.status==="reserved"} type="submit">Book Now</Button></div>
 </form>
  <br/> <br/>
  </div>
  
  </>
  )
}
