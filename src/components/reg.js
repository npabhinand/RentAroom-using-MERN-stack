import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './styles/1.svg';


function Reg() {
  return (
    <div>
    <main className="form-signin w-100 m-autobg- d-flex justify-content-center ">
    <form style={{width:"400px"}}>

  <div className='d-flex justify-content-center'>
  <img className="mb-4 d-flex justify-content-between" src={logo} alt="" width="50px" height="50px"/><br></br>
  <h1 className="h3 mb-3 fw-normal">RentARoom</h1>
  </div>
  <div className='d-flex justify-content-center'>
    <h1 className="h3 mb-3 fw-normal">Register</h1>
    </div>
    <div className="form-floating mb-1">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-1">
      <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-1">
      <input type="text" className="form-control" id="floatingPassword" placeholder="Phone number"/>
      <label for="floatingPassword">Phone Number</label>
    </div>
    <div className="form-floating mb-1">
      <input type="password" className="form-control" id="floatingPassword" placeholder=" New password"/>
      <label for="floatingPassword">New Password</label>
    </div>
    <div className="form-floating mb-1">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Re-enterPassword"/>
      <label for="floatingPassword">Re-enterPassword</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> I agree to the Terms and Conditions
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    
  </form>
</main>
</div>
    )
}

export default Reg;