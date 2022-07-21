import React from "react";
import { useState } from "react";
import { signIn } from "../api";
const Login = () => {

  let body =''
  
const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputsChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendDataInputs = async (e) => {
    e.preventDefault();
    body = await signIn(
      inputs.email,
      inputs.password
    );
console.log(body);
  };


  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h1 className="card-title">Sign In</h1>
          <p>Do you have an HBO Max account?</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={handleInputsChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleInputsChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="sign-in-button-container ">
            <button type="submit" className="btn btn-primary btn-sm sign-in-button" onClick={sendDataInputs}>
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
