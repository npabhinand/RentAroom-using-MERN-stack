import React from "react";
import {Container} from "react-bootstrap";
import Sidebar from "./Sidebar.js";


const Dashboard = props => {
    return (
        <>
         <Container fluid>
               
            <Sidebar/>
            </Container>
        </>
        );
  };
  
  export default Dashboard;