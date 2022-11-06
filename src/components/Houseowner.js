import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';
import {Table,Col,Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const Houseowner = () => {

  const [records, setRecords] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(()=>{
    async function getRecords(){
      const datas={ownerId:userId}
      const response=await fetch(`http://localhost:5000/view_by_owner/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });
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

console.log(records)
    // console.log("RECORDS ::: ", records);

  }, [records.length]);
  return(
    <div>
        <UserNav/>
        <br/>
        <p className="container square border border-dark text-center h3 p-3 mb-6" style={{height: "100px"}}><Link to='/addroom'> Addroom</Link></p>
        <br/>
        <div className='container square border border-dark mb-6'>
            <h3 className="text-center">Your properties</h3>
            

            {records.map((rm,i) => 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:5000/uploads/${rm.room[0].image}`} style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <p key={i}> Property Name:{rm.room[0].property_name}</p>
        <p>Type:{rm.room[0].types}</p>
        <p>Type:{rm.room[0].rate}</p>
        </Card.Text>
      </Card.Body>
    </Card>
       )}
        <br/>  
            
           
            
        </div>
        <br/>
        <div className='container square border border-dark text-center h3 p-3 mb-6'>
        <h3 className="text-center ">New Enquries</h3>
        <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Property Name</th>
          <th>Place</th>
          <th>Contact</th>
          <th colSpan={2}>Actions </th>
       
        </tr>
      </thead>
      <tbody>
        {records.map((rec, idx) => {
          return <tr key={idx}>
          <td>{idx+1}</td>
          <td>{rec.reserver[0].name}</td>
          <td>{rec.room[0].property_name}</td>
          <td>{rec.reserver[0].place}</td>
          <td>{rec.reserver[0].phone}</td>
          <td><Button variant="outline-success">Accept</Button>{' '}</td>
          <td><Button variant="outline-danger">Decline</Button>{' '}</td>
        </tr>
        })}
        
        </tbody>
    </Table>
        </div>
    </div>
  );
}
export default Houseowner;
