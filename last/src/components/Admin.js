import { Nav,Button,Card, Alert,Container,Row ,Col,Table  } from 'react-bootstrap';
import UserNav from './UserNav';
import Test from './test';
import { useState, useEffect } from 'react';


function Admin() {

  const [show, setShow] = useState(true);
  const [views, setViews] = useState([]);
  const [owner, setOwner]=useState([]);
  const [property,setProperty]=useState([]);
  const[totalProp,setTotalProp]=useState([]);
  const[totalStud,setTotalStud]=useState([]);
  const[totalOwner,setTotalOwner]=useState([]);
  const [homeStatus, setHomeStatus] = useState("home");

  useEffect(() => {
    async function getViews() {
      console.log("Called");
      const response = await fetch(`http://localhost:5000/admin/student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const views = await response.json();
      console.log(views, "VIEWS");
      setViews(views);
    }
    getViews();
    console.log(views);
  }, []);



  useEffect(() => {
    async function getOwner() {
      const response = await fetch(`http://localhost:5000/admin/owner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const owner = await response.json();
      console.log(owner, "OWNER");
      setOwner(owner);
    }
    getOwner();
    console.log(owner);
  }, []);



  useEffect(() => {
    async function getProperty() {
      const response = await fetch(`http://localhost:5000/admin/room`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const property = await response.json();
      console.log(property, "OWNER");
      setProperty(property);
    }
    getProperty();
  }, []);




  useEffect(() => {
    async function getTotalOwner() {
      const response = await fetch(`http://localhost:5000/admin/total_owner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const totalOwner = await response.json();
      console.log(totalOwner, "Total student");
      setTotalOwner(totalOwner);
    }
    getTotalOwner();

  }, []);




  useEffect(() => {
    async function getTotalStudent() {
      const response = await fetch(`http://localhost:5000/admin/total_student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const totalStud = await response.json();
      console.log(totalStud, "Total student");
      setTotalStud(totalStud);
    }
    getTotalStudent();

  }, []);
 





  


  useEffect(() => {
    async function getTotalProperties() {
      const response = await fetch(`http://localhost:5000/admin/total_properties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const totalProp = await response.json();
      console.log(totalProp, "Total PROPERTIES");
      setTotalProp(totalProp);
    }
    getTotalProperties();

  }, []);
 




 const handleDash=()=>{
 

// <Container fluid>
//         <Row>
//         <Alert show={show} variant="success">
//         <Alert.Heading>How's it going?! Administrator</Alert.Heading>
//         <p>
//           Manage all users, properties and house owners from this panel. 
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close 
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show All Notifications</Button>}
//         </Row>
//         <Row>
//          
//         </Row>
//       </Container>
window.alert('window')
 }

    return (
      <>
      <Container fluid='true'>
        <Row>
          <Col><UserNav /></Col>
          
        </Row>
        
        </Container>
        <Container fluid='true'>
        <Row>
        <Col sm={3} >
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar" style={{height:'100vh', }}
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link > <Button variant="primary" style={{width:'150px',height:'50px'}} size="lg" onClick={
                      ()=>setHomeStatus("home")}>Dashboard</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link > <Button variant="primary" size="lg" style={{width:'150px',height:'50px'}} onClick={
                      ()=>setHomeStatus("student")}>Students</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link > <Button variant="primary" style={{width:'150px',height:'50px'}} onClick={
                      ()=>setHomeStatus("owner")}> House owner</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link > <Button variant="primary" style={{width:'150px',height:'50px'}} onClick={
                      ()=>setHomeStatus("property")}>Properties</Button></Nav.Link>

            </Nav.Item>
            </Nav>
          
          </Col>
        <Col sm={9} className="pt-4">

{ homeStatus=="student" && <Table striped  hover>
          
    <thead>
      <tr >
        <th>No.</th>
        <th>Student Name</th>
        <th>Email</th>
        <th>place</th>
        <th>contacts</th>
      </tr>
    </thead>
    <tbody>



    {views.map((rm, i) => (
      <tr key={i}>
        <td>{i+1}</td>
        <td>{rm.name}</td>
        <td>{rm.email}</td>
        <td>{rm.place}</td>
        <td>{rm.phone}</td>
      </tr>
        ))}
    </tbody>
    
  </Table>}
 {  homeStatus=="owner" &&
           <Table striped  hover>
    <thead>
      <tr >
        <th>No.</th>
        <th>House Name</th>
        <th>Email</th>
        <th>place</th>
        <th>contacts</th>
      </tr>
    </thead>
    <tbody>
    {owner.map((own, j) => (
      <tr key={j}>
        <td>{j+1}</td>
        <td>{own.name}</td>
        <td>{own.email}</td>
        <td>{own.place}</td>
        <td>{own.phone}</td>
      </tr>
      ))}
    </tbody>
  </Table>}



  {  homeStatus=="property" &&  <Table striped  hover style={{width:"800px"}}>
<thead>
  <tr >
    <th>No.</th>
    <th>Property Name</th>
    <th>type</th>
    <th>Accomodation For</th>
    <th>rate</th>
    <th>contacts</th>
  </tr>
</thead>
<tbody>
{property.map((pr, k) => (
  <tr key={k}>
    <td>{k+1}</td>
    <td>{pr.property_name}</td>
    <td>{pr.types}</td>
    <td>{pr.accomodation_for}</td>
    <td>{pr.rate}</td>
    <td>{pr.phone}</td>
  </tr>
    ))}
</tbody>

</Table>}

{ homeStatus=="home" && <>        
     
     <Row>   <Col xs={4} id="sidebar-wrapper">
            <Card>
              <Card.Header>Registered Students</Card.Header>
              <Card.Body>

                <Card.Title>{totalStud} Students</Card.Title>

                <Button variant="primary"onClick={
                      ()=>setHomeStatus("student")}>View All</Button>
               </Card.Body>
             </Card>
           </Col>
         <Col xs={4} id="page-content-wrapper">
         <Card>
             <Card.Header>Registered House Owners</Card.Header>
               <Card.Body>
                 <Card.Title>{totalOwner} House Owners</Card.Title>
                 <Button variant="primary"onClick={
                      ()=>setHomeStatus("owner")}>View All</Button>
               </Card.Body>
           </Card>
           </Col>
          <Col xs={4} id="page-content-wrapper">
             <Card>
               <Card.Header>Registered Properties</Card.Header>
              <Card.Body>
                 <Card.Title>{totalProp} Properties</Card.Title>
                 <Button variant="primary"onClick={
                      ()=>setHomeStatus("property")}>View All</Button>
                 
               </Card.Body>
            </Card>
           </Col></Row>
</>}
  </Col>
        </Row>
        </Container>
        </>
      
    );
  }
  
  
  export default Admin;