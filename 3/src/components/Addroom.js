import React, { useState } from "react";
import formData from 'form-data';
// import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UserNav from "./UserNav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// const axios = require("axios");
// import axios from "axios";
// const formData = require('form-data');
// import formData from "form-data";

function Addroom() {
  const userId = localStorage.getItem("userId");
  
  const [form, setForm] = useState({
    property_name: "",
    types: "house",
    rate: "",
    ownerId:userId,
    accomodation_for: "Boys",
    total_inmates: "",
    phone: "",
    description: "",
    furniture: "Furnished",
    bathroom_type: "Attached",
    imageObject: "",
    file: "",
  });
  // const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    
    const addRoom = { ...form };
    const newRoom = new formData();
    for (var key in addRoom) {
      newRoom.append(key, addRoom[key]);
    }
    const files = addRoom.imageObject;
    if (files.length != 0) {
      for (const single_file of files) {
        newRoom.append("file", single_file);
      }
    }
    console.log("inside sub ::: ",newRoom)
    await fetch("http://localhost:5000/addroom/add", {
      method: "POST",
      body: newRoom,
    //   headers: {
    //     "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(addRoom),
   }).then(res=>{
    console.log(res)
    window.alert("Room Added succussfully");
   })
   .catch(error => {
     window.alert(error);
     return;
   });
    setForm({
      property_name: "",
      types: "house",
      rate: "",
      accomodation_for: "Boys",
      total_inmates: "",
      phone: "",
      description: "",
      furniture: "Furnished",
      bathroom_type: "Attached",
      imageObject: "",
      file: "",
    });
    // navigate("/");
  }

  return (
    <>
      <UserNav />
      <div className="border">
        <br/>
      <Container>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Property Name</Form.Label>
              <Form.Control  type="text" value={form.property_name}
                onChange={(e) => updateForm({ property_name: e.target.value })}
                placeholder=" Property Name" required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label >Types</Form.Label>
              <Form.Select
                value={form.types} default="house"
                onChange={(e) => updateForm({ types: e.target.value })}
              >
                <option value="house">House</option>
                <option value="room">Room</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
          <Form.Label>Rate:</Form.Label>
              <Form.Control  type="number" value={form.rate}
                onChange={(e) => updateForm({ rate: e.target.value })}
                placeholder="Rate"
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label h>Accomodation For:</Form.Label>
              <Form.Select
                id="Select" default="Boys"
                value={form.accomadation_for} 
                onChange={(e) =>
                  updateForm({ accomodation_for: e.target.value })}>
                <option value="Boys" >Boys</option>
                <option value="Girls">Girls</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
              <Form.Label>
               Phone:
              </Form.Label>
              <Form.Control  type="number" id="TextInput" placeholder="Phone Number" value={form.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}/>
            </Form.Group>
            
            <Form.Group as={Col} className="mb-3">
              <Form.Label >Total Inmates:</Form.Label>
              <Form.Control required type="number"
                id="TextInput"value={form.total_inmates}
                onChange={(e) => updateForm({ total_inmates: e.target.value })}
                placeholder="Total Inmates"/>
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
              <Form.Label >Furnishing</Form.Label>
              <Form.Select
                value={form.furniture} default="house"
                onChange={(e) => updateForm({ furniture: e.target.value })}
              >
                <option value="Furnished">Furnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label >Bathroom Type</Form.Label>
              <Form.Select
                id="Select" 
                value={form.bathroom_type} 
                onChange={(e) =>
                  updateForm({ bathroom_type: e.target.value })}>
                <option value="Attached" >Attached</option>
                <option value="Outside">Outside</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group className="mb-3">
          <Form.Label >Description</Form.Label>
            <Form.Control as="textarea" required
              style={{ height: "100px" }} value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })} placeholder="Description"/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload images of the room</Form.Label>
        <Form.Control type="file" multiple required name="file" onChange={(e) => updateForm({ imageObject: e.target.files })} />
      </Form.Group>
            <Form.Group className="mb-3">
              <Button type="submit" value="addRoom">Submit</Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
      </div>
    </>
  );
}

export default Addroom;
