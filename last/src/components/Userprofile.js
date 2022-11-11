import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card,Button } from "react-bootstrap";
import { useSearchParams,useNavigate, 
  createSearchParams, } from "react-router-dom";
// import Loading from "./Loading";

export default function Userprofile(props) {
  const [user, setUser] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
 
  // This method fetches the user from the database.
  useEffect(() => {
    console.log("----")
    console.log("-------------"+userId)
    async function getUser() {
      const response = await fetch(`http://localhost:5000/user/${userId}`);
      console.log(response)
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const user = await response.json();
      setUser(user);
    }

    getUser();

    return;
  }, [user.length]);
  
  // const onEdit = () => {
  //     navigate({
  //       pathname: "/editprofile",
  //       search: createSearchParams({
  //         id: userId
  //       }).toString()
  //     });
  // }
  return (
    <div style={{ backgroundColor: "primary" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="1" xl="10">
            <Card>
              <Card.Body
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-3 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  
                  <Card.Img
                    src={`./images.png`} roundedCircle
                    alt="Generic placeholder image"
                    className="mt-4 mb-1"
                    fluid="true"
                    style={{ width: "100px", zIndex: "1" }}
                   />
                </div>

                <div className="ms-3" style={{ marginTop: "130px" }}>
                  
                  <h5>{user.name}</h5>
                  <p>{user.phone}</p>
                  <Card.Text></Card.Text>
                </div>
              </Card.Body>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f0f5f5" }}
              >
                <p
                  className="ms-5 mt-4 d-flex flex-column"
                  variant="outline-dark"
                  style={{ height: "36px" }}
                >
                  {/* <Button variant="outline-dark" style={{width:"200px"}} onClick={onEdit}>Edit Profile</Button> */}
                </p>
              </div>
              <Card.Body className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Details</p>
                  <div className="p-4" style={{ backgroundColor: "#f0f5f5" }}>
                    <Card.Text className="font-italic mb-1">
                     Email:  {user.email}
                    </Card.Text>
                    <Card.Text className="font-italic mb-1">
                       Place: {user.place}
                    </Card.Text>
                    <Card.Text className="font-italic mb-0">
                    User Type:  {user.usertype}
                    </Card.Text>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Card.Text className="lead fw-normal mb-0">
                    wishlist
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </Card.Text>
                </div>
                <Row>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }