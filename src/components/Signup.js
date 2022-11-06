import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar1 from './Navbar1';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Signup() {

  const [form, setForm] = useState({
    usertype: "student",
    email: "",
    password: "",
    name: "",
    phone: "",
    gender: "male",
    place: "",
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = { ...form };
  
    await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    



    setForm({ usertype: "", email: "", password: "", name: "" , phone: "", gender: "", place: ""  });
    navigate("/");
  }
  

  return (
    <>

    <Navbar1/>
    <br/>
    <Container className="fluid-mdc square border border-dark ">
    <Form onSubmit={onSubmit}>
      <br/>
      <p className="text-center h3">Sign up</p><br/>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserType">
        <Form.Label>UserType</Form.Label>
        <Form.Select aria-label="Default select example" value={form.usertype}
           onChange={(e) => updateForm({usertype: e.target.value })}>
      <option value="student">Student</option>
      <option value="house owner">House Owner</option>
    </Form.Select>
        </Form.Group>
    
      </Row>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })} placeholder="Password" />
        </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} placeholder="Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })}placeholder="Phone No" />
        </Form.Group>

       
      </Row>
     <br/>
      <Row>
      <Form.Group as={Col} controlId="formGridUserType">
        <Form.Label>Gender</Form.Label>
        <Form.Select aria-label="Default select example" value={form.gender} default="male"
        onChange={(e) => updateForm({ gender: e.target.value })}>
            <option value="male">male</option>
            <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="formBasicPlace">
      
      <Form.Label>Place</Form.Label>
      <Form.Control type="text" value={form.place}
           onChange={(e) => updateForm({ place: e.target.value })} placeholder="Place" />
    </Form.Group>
      </Row>


    
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="I agree the given information is correct." required/>
    </Form.Group>
    <div className="text-center">
    <Button variant="primary" type="submit"  value="Create user">
      Submit
      
    </Button>
    </div>
  </Form>
  <br/>
  </Container>
  </>
  )
}

export default Signup;