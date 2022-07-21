import React from "react";
import { useState } from "react";
import { signUp } from "../api";

const Registration = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [accountStatus, setAccountStatus] = useState(false);
  const [accountError, setAccountError] = useState(false);

  let body = "";

  const handleInputsChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendDataInputs = async (e) => {
    e.preventDefault();
    body = await signUp(
      inputs.firstName,
      inputs.lastName,
      inputs.email,
      inputs.password
    );

    console.log(body);

  
    
    body.isAuthenticated && setAccountStatus(true);
    body.error && setAccountError(true);
  };


  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h4 className="card-title">Create Your Account</h4>
          <p>
            Get access to an epic library of entertainment - anytime, anywhere.
          </p>
        </div>

        <form>
          <div className="row mb-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                onChange={handleInputsChange}
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={handleInputsChange}
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="inputAddress">Email Adress</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter email"
              name="email"
              onChange={handleInputsChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="inputAddress2">
              Your password must be at least 8 characters and include a number
              or special chatacter.
            </label>
            <input
              type="pasword"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              name="password"
              onChange={handleInputsChange}
            />
          </div>

          <div className="form-group mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                I agree to the HBO Max <em>Terms of Use</em> and{" "}
                <em>Privacy</em>.
              </label>
            </div>
          </div>

          <div className="sign-in-button-container">
            <button
              type="submit"
              className="btn btn-primary btn-sm sign-in-button"
              onClick={sendDataInputs}
            >
              <strong>Create Account</strong>
            </button>
          </div>
          { accountStatus ? <div><h1>You have been registered</h1></div>  : <div> <h2>{body.error}</h2></div> }
        </form>
      </div>
    </div>
  );
};
export default Registration;
