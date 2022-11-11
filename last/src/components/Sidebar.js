import React from "react";
import {Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Sidebar = props => {
   

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home"> <Button variant="primary" style={{width:'160px'}} size="lg">Dashboard</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1"> <Button variant="primary" size="lg" style={{width:'160px'}}>Manage Users</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2"> <Button variant="primary" style={{width:'160px'}}>Manage Properties</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2"> <Button variant="primary" style={{width:'160px'}}>View Profile</Button></Nav.Link>
            </Nav.Item>
            </Nav> 
        </>
        );
  };
  
  export default Sidebar
