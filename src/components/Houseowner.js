import React from 'react';
import UserNav from './UserNav';
import {Table,Col,Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Houseowner = () => {
  return (
    <div>
        <UserNav/>
        <br/>
        <p className="container square border border-dark text-center h3 p-3 mb-6" style={{height: "100px"}}><Link to='/addroom'> Addroom</Link></p>
        <br/>
        <div className='container square border border-dark mb-6'>
            <h3 className="text-center">Your properties</h3>
            <p> property name:</p>
        </div>
        <br/>
        <div className='container square border border-dark text-center h3 p-3 mb-6'>
        <h3 className="text-center ">New Enquries</h3>
        <Table striped-dark>
      <thead table-dark >
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>place</th>
          <th>Accept </th>
          <th>Decline </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>sachin</td>
          <td>kozhikode</td>
          <td><Button variant="outline-primary">Accept</Button>{' '}</td>
          <td><Button variant="outline-primary">Decline</Button>{' '}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ashaad</td>
          <td>Thornton</td>
          <td><Button variant="outline-primary">Accept</Button>{' '}</td>
          <td><Button variant="outline-primary">Decline</Button>{' '}</td>
        </tr>
        </tbody>
    </Table>
        </div>
    </div>
  )
}
export default Houseowner;
