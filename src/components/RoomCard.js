import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate, createSearchParams,
useParams, useSearchParams  } from 'react-router-dom';

export default function RoomCard() {

  const [records, setRecords] = useState([]);
  const [id] = useSearchParams();
  useEffect(()=> {
    async function getRecords() {
      const response = await fetch (`http://localhost:5000/addroom/`);
      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      console.log(records);
      setRecords(records);
    }
    getRecords();
    console.log(records);
  }, [records.length]);
  return (
    records.map((record,idx)=>(
      <Link to={"/roomdetails?roomid=" + record._id+"?"+id} style={{color:"dark", textDecoration:"none"}}>
      <Card key={idx} style={{ margin: '2rem', width: '21rem' }} >
      <Card.Img variant="top" src={`http://localhost:5000/uploads/${record.image}`} />
      <Card.Body>
        <Card.Title>{record.property_name}</Card.Title>
        <Card.Text>
          Type:{record.types} <br/>
          Accomodation For:{record.accomodation_for}
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </Link>

    ))
    
  )
}
