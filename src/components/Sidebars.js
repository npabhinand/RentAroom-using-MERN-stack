import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./styles/1.svg";


const Sidebars = () => {
  return (
  <div>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">

        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Filters</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasTopLabel">Filters</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    


  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Price
      </button>
    </h2>
    
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"><form>
      <label for="customRange2" className="form-label">price:₹</label>
      <input type="range" className="form-range-track-cursor" min="500" max="50000" id="customRange2" width="100"/>
      </form>

      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <p>Accomodation For:</p>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
  
            <div className="d-grid gap-2 d-md-block">
             <button className="btn btn-primary" type="button">male</button>
             <button className="btn btn-primary" type="button">Female</button>
        </div>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <p>No.of Rooms</p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <input type="text" id="form12" className="form-control" />
 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Furnishing:
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
         <div className="accordion-body">
         <div className="input-group mb-3"></div>
  <div className="form-group  mb-3">
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Furnished</option>
      <option>Semi-Furnished</option>
      <option>Unfurnished</option>
    </select>
         
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
</div>

        
        <img src={logo} className="me-2" height="40px" width="40px" alt="MDB Logo"/>
      <small>RentARoom</small>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        </div> 
    </a>
  </div>
</nav>

  </div>


)};
export default Sidebars;
