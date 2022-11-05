import React, { useState } from "react";
import formData from 'form-data';
// import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar1";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// const axios = require("axios");
// import axios from "axios";
// const formData = require('form-data');
// import formData from "form-data";

function Addroom() {
  const [form, setForm] = useState({
    property_name: "",
    types: "house",
    rate: "",
    accomodation_for: "Boys",
    total_bedroom: "",
    person_per_room: "",
    description: "",
    furniture: "",
    bathroom_type: "",
    purifier: "",
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
    await fetch("http://localhost:5000/addroom/add", {
      method: "POST",
      body: newRoom,
    //   headers: {
    //     "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(addRoom),
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
      total_bedroom: "",
      person_per_room: "",
      description: "",
      furniture: "",
      bathroom_type: "",
      purifier: "",
      file: "",
    });
    // navigate("/");
  }

  return (
    <>
      <Navbar1 />
      <div className="border">
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
                <option value="pg">PG</option>
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
              <Form.Label >Total Bedrooms:</Form.Label>
              <Form.Control required type="number"
                id="TextInput"value={form.total_bedroom}
                onChange={(e) => updateForm({ total_bedroom: e.target.value })}
                placeholder="Total bedroom"/>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                No of persons/room:
              </Form.Label>
              <Form.Control  type="number" id="TextInput" placeholder="persons/per room" value={form.person_per_room}
                onChange={(e) => updateForm({ person_per_room: e.target.value })}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Control as="textarea" required
              style={{ height: "100px" }} value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })} placeholder="Description"/>
          </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="Select">Amenities:</Form.Label>
            <Form.Check
              type="checkbox"
             name="Furniture"
              value="yes" 
              onChange={(e) => updateForm({ furniture: e.target.value })}
              label="Furniture"
            />
            <Form.Check
              type="checkbox"
              name="Bathroomtype"
              value="yes" 
              onChange={(e) => updateForm({ bathroom_type: e.target.value })}
              label="Attached Bathroom"
            />
            <Form.Check type="checkbox" name="purifier" value="yes"
               onChange={(e) => updateForm({ purifier: e.target.value })}
              label="WaterPurifier" 
            />
          </Form.Group>

          <Row className="mb-3">
          <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload images of the room</Form.Label>
        <Form.Control type="file" required name="file" onChange={(e) => updateForm({ file: e.target.files[0] })} />
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
