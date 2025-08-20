// App.jsx
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("signup"); // default: signup
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Login Handlers
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    setPage("dashboard");
  };


  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", signupData);
    setPage("login");
  };


  if (page === "login") {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          /><br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          /><br /><br />

          <button type="submit"><span>Submit</span></button>
        </form>

        <div className="extra">
          <p>
            Not have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setPage("signup"); }}>
              Sign Up Here
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (page === "signup") {
    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <h5>It's free and only takes a minute</h5>
        <form onSubmit={handleSignupSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={signupData.firstName}
            onChange={handleSignupChange}
            required
          /><br />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={signupData.lastName}
            onChange={handleSignupChange}
            required
          /><br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
            required
          /><br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
            required
          /><br />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleSignupChange}
            required
          /><br /><br />

          <button type="submit"><span>Submit</span></button>
        </form>

        <p>
          By clicking the Sign Up button, you agree to our
          <a href="#"> Terms and Condition</a> and
          <a href="#"> Policy Privacy</a>.
        </p>

        <div className="extra">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setPage("login"); }}>
              Login Here
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (page === "dashboard") {
    return (
      <div className="dashboard">
        <h2>Thank You</h2>
      </div>
    );
  }
}
