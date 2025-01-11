import React from "react";
import "./Register.scss";

function Register() {
  return (
    <div className="rg_wrapper">
      <div className="rg_left">
        <h1>
          <span className="gradientText">Register</span> for Our Next Event
        </h1>
        <p>
          Don’t miss out on the opportunity to connect with top traders,
          analysts, and enthusiasts at our upcoming event. Secure your spot now
          and take a step toward expanding your network and enhancing your
          trading skills. Simply fill out the form below to be notified about
          our next event
        </p>
      </div>
      <div className="rg_right">
        <div className="rg_form">
          <div className="input_wrapper">
            <label>
              First Name<sup>*</sup>
            </label>
            <div className="input_box">
              <input type="text" />
            </div>
          </div>
          <div className="input_wrapper">
            <label>
              Last Name<sup>*</sup>
            </label>
            <div className="input_box">
              <input type="text" />
            </div>
          </div>
          <div className="input_wrapper">
            <label>
              Email<sup>*</sup>
            </label>
            <div className="input_box">
              <input type="text" />
            </div>
          </div>
          <div className="input_wrapper">
            <label>
              Country<sup>*</sup>
            </label>
            <div className="input_box">
              <input type="text" />
            </div>
          </div>
        </div>
        <button className="gradientButton_small">Submit</button>
      </div>
    </div>
  );
}

export default Register;
