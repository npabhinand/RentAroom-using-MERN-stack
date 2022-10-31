import React from 'react'
import kerala1 from "./styles/kerala1.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
function Cards() {
  return (
    <div>
        
      <div className="card border border-dark" style={{width: "18rem"}}>
    <img className="card-img-top" src={kerala1} style={{maxWidth:"18rem"}} alt="connection failed"/>
    <div className="card-body">
      <p>House Name</p>
    </div>
  </div>
  </div>
  )
}

export default Cards;