import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
function Featrured() {
  return (
    <div>
      <p className="h2 d-flex justify-content-center">Featured properties</p>
      <Cards/>
  </div>
  )
}

export default Featrured;