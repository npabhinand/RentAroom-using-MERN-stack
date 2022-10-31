import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import house from './styles/house.jpg'
function Image() {
  return (
    <div>
        <img src={house} className="img-fluid" alt="..." width="100%" height="30%"/>
    </div>
  )
}

export default Image