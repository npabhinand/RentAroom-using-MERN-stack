import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar1 from './Navbar1';
import Container from 'react-bootstrap/Container';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {useState} from 'react';


function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usertype, email, password);
    const data = {usertype: usertype, email: email, password: password};
  
    const result = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      result => result.json()
    );
    console.log(usertype);
    
    if (result.type === 'none')
    {
      window.alert("Login failed");

    }
  else if(result.type === 'student') 
    {
      localStorage.setItem("userId",result._id)
      console.log("student redirecting");
      navigate({
        pathname: "/userhome",
        search: createSearchParams({
          id: result._id
        }).toString()
      });
    }
    else if(result.type === 'owner')
    {
      console.log("house owner redirecting");
      localStorage.setItem("userId",result._id)
      navigate({
        pathname: '/houseowner',
        search: createSearchParams({
          id: result._id
        }).toString()
      });
    }
  }
  
  const [usertype, setUsertype] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  
  return (
    <>

    <Navbar1/>
    <br/>
   
    <Container className="square border border-dark " style={{width:1000,height:500}}>
      <br/><br/>
    <h3 className="text-center">LOGIN</h3>
    <Form onSubmit={handleSubmit}>
      <br/>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
    </Form.Group>
    <br/><br/>
    <div className='text-center'>
    <Button variant="primary " type="submit" >
    Login
    </Button>
    </div>
  </Form>
  <br/>
  </Container>
  </>
  )
}

export default Login