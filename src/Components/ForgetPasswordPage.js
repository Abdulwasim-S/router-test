import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ForgetPasswordPage() {
  return (
    <div className="body bg-secondary d-flex align-items-center " style={{height:'100vh'}}>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4 text-muted">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <br/>
                      <NavLink
                      to='/login'
                        className="btn btn-primary btn-user btn-block w-100"
                      >
                        Reset Password
                      </NavLink>
                    </form>
                    <hr />
                    <div className="text-center">
                      <NavLink 
                      to='/register'
                      className="small btn"
                      style={{textDecoration:'none'}}>
                        Create an Account!
                      </NavLink>
                    </div>
                    <div className="text-center">
                      <NavLink 
                      to='/login'
                      className="small btn" 
                      style={{textDecoration:'none'}}>
                        Already have an account? Login!
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
