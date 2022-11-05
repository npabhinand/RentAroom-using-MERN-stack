import React from 'react'
import {Carousel, Button} from 'react-bootstrap';
import UserNav from './UserNav';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Roomdetails(props) {
  const { search } = useLocation();
  const roomid = new URLSearchParams(search).get("roomid")
  const data = roomid.split('?')
  console.log("------blah-----"+data[0])
  console.log("=====blah====="+data[1].substring(2))
  const [records, setRecords] = useState([]);

    const handleClick  = async (e) => {
      e.preventDefault();
      const datas = {roomid: data[0], userid: data[1].substring(3)};
      const result = await fetch("http://localhost:5000/addinmate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      }).then(
        result => result.json()
      );
    }



  useEffect(()=>{
    async function getRecords(){
      const response=await fetch(`http://localhost:5000/addroom/${roomid}`);
      console.log(response);
      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records= await response.json();
      console.log(records);
      setRecords(records);
    }
    getRecords();


    // console.log("ROOM ID ::: ", roomid);
    // console.log("RECORDS ::: ", records);

  }, [records.length]);
  return (
    <>
  <UserNav/>
  <br/>
  <div className='container square border border-dark text-center'>
   
    <Carousel variant="dark d-block w-75 text-center">
    <Carousel.Item className="text-center">
    
      <img
        className="d-block w-100 "
        src={`http://localhost:5000/uploads/${records.image}`}
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
        className="d-block w-100"
        src="./room.jpg"
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
  
 
  <p >House Name:{records.property_name}</p>
  <p >Price:{records.rate}</p>
  <p >Types:{records.types}</p>
  <p >Accomodation For:{records.accomodation_for}</p>
  <p >Total Bedrooms:{records.total_bedroom}</p>
  <p>No of persons/room:{records.person_per_room}</p>
  <p>description: {records.description}</p>
 <form onSubmit={handleClick}>
 <Button type="submit">Booknow</Button>
 </form>
  <br/> <br/>
  </div>
  
  </>
  )
}
