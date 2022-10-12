import React from 'react'
import Sidebars from './Sidebars'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min"

function User() {
  return (
    <div className="container-fluid ">
          <Sidebars/>
            <div className="row">
            <div className="col">
         <Cards/></div>
         <div className="col">
         <Cards/>
           
            </div>
            
    </div></div>
  )
}

export default User;