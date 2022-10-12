import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from './styles/1.svg';
import { Link } from "react-router-dom";


function SignIn() {
  return (<div className='container'>
    <h2 className="fw-bold mb-3 ">
    <img className=""src={logo} width="50px" height="50px" />
    <p className="fw-bold mb-3 text-center">RentARoom</p></h2>
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-white text-black" style={{borderRadius: "1rem;"}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-3 ">
              
              <p>Login</p></h2>
              <p className="text-white-50 mb-5">Please enter your login and password</p>

              <div className="form-outline form-white mb-3">
              <label className="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Enter Email" />
                
              </div>

              <div className="form-outline form-white mb-3">
              <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Enter Password" />
                
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-black-100" href="#!">Forgot password?</a></p>

              <button className="btn btn-primary btn-lg px-5" type="submit"><Link className="text-dark fw-bold" to="/Owner">Login</Link> </button>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link className="text-black-50 fw-bold" to="/registration">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}

export default SignIn