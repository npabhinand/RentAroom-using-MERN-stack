import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { Table, Col, Row, Button, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link,} from "react-router-dom";
import Card from "react-bootstrap/Card";
import formData from 'form-data';
import Form from "react-bootstrap/Form";


export const Houseowner = () => {
  const [records, setRecords] = useState([]);
  const [views, setViews] = useState([]);
  const userId = localStorage.getItem("userId");
  const [updateRoomData, setUpdateRoomData] = useState({});

  const [modalShow, setModalShow] = useState(false);


  // const [updateRoomData, setForm] = useState({
  //   property_name: "",
  //   types: "house",
  //   rate: "",
  //   ownerId:userId,
  //   accomodation_for: "Boys",
  //   total_inmates: "",
  //   phone: "",
  //   description: "",
  //   furniture: "Furnished",
  //   bathroom_type: "Attached",
  //   file: "",
  // });


  async function onSubmit(e) {
    e.preventDefault();
    
    const addRoom = { ...updateRoomData };
    const newRoom = new formData();
    for (var key in addRoom) {
      newRoom.append(key, addRoom[key]);
    }



    console.log(addRoom)
    console.log(addRoom._id)
    await fetch(`http://localhost:5000/addroom/update/${addRoom._id}`, {
      method: "POST",
      // body: newRoom,
      headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify(addRoom),
   }).then(res=>{
    console.log(res)
    window.alert("Room Updated succussfully");
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   setUpdateRoomData({
    
    });
    handleModalUpdateClose()
    window.location.reload();
  }




  const handleModalUpdateClose = () => setModalShow(false);
  const handleModalUpdateShow = () => setModalShow(true);
  function updateForm(value) {
    return setUpdateRoomData((prev) => {
      return { ...prev, ...value };
    });
  }



  const UpdateModal = () => {
    return (
      <>
     <Modal
        show={modalShow}
        onHide={handleModalUpdateClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Room {updateRoomData.property_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Property Name</Form.Label>
              <Form.Control  type="text" value={updateRoomData.property_name}
                onChange={(e) => updateForm({ property_name: e.target.value })}
                placeholder=" Property Name" required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label >Types</Form.Label>
              <Form.Select
                value={updateRoomData.types} default="house"
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
              <Form.Control  type="number" value={updateRoomData.rate}
                onChange={(e) => updateForm({ rate: e.target.value })}
                placeholder="Rate"
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Accomodation For:</Form.Label>
              <Form.Select
                id="Select" value={updateRoomData.accomadation_for} 
              
                onChange={(e) =>
                  updateForm({ accomodation_for: e.target.value })}>

                  
                <option  >Select type</option>
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
              <Form.Control  type="number" id="TextInput" placeholder="Phone Number" value={updateRoomData.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}/>
            </Form.Group>
            
            <Form.Group as={Col} className="mb-3">
              <Form.Label >Total Inmates:</Form.Label>
              <Form.Control required type="number"
                id="TextInput"value={updateRoomData.total_inmates}
                onChange={(e) => updateForm({ total_inmates: e.target.value })}
                placeholder="Total bedroom"/>
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
              <Form.Label >Furnishing</Form.Label>
              <Form.Select
                value={updateRoomData.furniture} default="house"
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
                value={updateRoomData.bathroom_type} 
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
              style={{ height: "100px" }} value={updateRoomData.description}
              onChange={(e) => updateForm({ description: e.target.value })} placeholder="Description"/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
    
            <Form.Group className="mb-3">
              <Button type="submit" value="addRoom">Update</Button>
            </Form.Group>
          </Row>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalUpdateClose}>
            Close
          </Button>
          {/* <Button variant="primary">Update</Button> */}
        </Modal.Footer>
      </Modal>
    
      </>
    );
  };

  useEffect(() => {
    async function getRecords() {
      const datas = { ownerId: userId };
      const response = await fetch(`http://localhost:5000/view_by_owner/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });
      console.log(response);
      if (!response.ok) {
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
    // console.log("RECORDS ::: ", records);
  }, [records.length]);

  useEffect(() => {
    async function getViews() {
      console.log("Called");
      const datas = { ownerId: userId };
      const response = await fetch(`http://localhost:5000/property/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
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
    // console.log("RECORDS ::: ", records);
  }, []);

  const handleAction = async (action, payload) => {
    console.log(action, payload);

    const confirm = window.confirm(`Do you want to ${action} this enquiry?`);
    if (confirm) {
      const response = await fetch(`http://localhost:5000/reserve/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => {
        console.log(res);
      });
      window.location.reload()
    }

  };
  return (
    <div>
      {UpdateModal()}
      <UserNav />
      <br />
      <p
        className="container square border border-dark text-center h3 p-3 mb-6"
        style={{ height: "100px" }}
      >
       <Link to="/addroom"><Button variant="outline-info" style={{width:'75px',height:'75px'}}>
        <b style={{fontSize:'40px'}}>+</b></Button></Link>
       Addroom</p>
      <br />
      <div className="container square border border-dark mb-6">
        <h3 className="text-center">Your properties</h3>
        <br />
        <Container>
          <Row lg={3}>
            {/* {console.log("vvv : ", views)} */}
            {views.map((rm, i) => (
              <Card key={i} style={{ width: "21rem", margin: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/uploads/${rm.image[0]}`}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title className="h6" key={i}>
                    Property Name:{rm.property_name}
                  </Card.Title>
                  <Card.Text>
                    Type:{rm.types}
                    <br />
                    Accomodation For:{rm.accomodation_for}
                    <br />
                    Rate:{rm.rate}
                    <br />
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="primary" onClick={
                      ()=>{

                        handleModalUpdateShow();
                        setUpdateRoomData(rm)
                      }   
                    }>
                      Update
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
        <br />
      </div>
      <br />
      <div className="container square border border-dark text-center h3 p-3 mb-6">
        <h3 className="text-center ">New Enquries</h3>
        <Table responsive>
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
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{rec.reserver[0].name}</td>
                  <td>{rec.room[0].property_name}</td>
                  <td>{rec.reserver[0].place}</td>
                  <td>{rec.reserver[0].phone}</td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={(e) =>
                        handleAction("accept", {
                          e_id: rec._id,
                          roomid: rec.roomid,
                          ownerid: rec.ownerId,
                          bookerid: rec.userid,
                        })
                      }
                    >
                      Accept
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={(e) =>
                        handleAction("decline", {
                          e_id: rec._id,
                          roomid: rec.roomid,
                          ownerid: rec.ownerId,
                          bookerid: rec.userid,
                        })
                      }
                    >
                      Decline
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Houseowner;