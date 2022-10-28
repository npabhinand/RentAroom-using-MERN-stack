import React from 'react'
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

const Recently = () => {
  return (
    <div>
        <p className="h2 d-flex justify-content-center">Recently Listed</p>
        <Cards/>
    </div>
  )
}
export default Recently;
