import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="contn">
        <div className="logintitle">
          <h3> Login to Continue </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="emailform">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              autoComplete="off"
              type="email"
              onChange={onChange}
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="passwordform">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={onChange}
              autoComplete="off"
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <button type="button" className="login-with-google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
