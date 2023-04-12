import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userdata.css";

const Userdata = () => {
  let navigate = useNavigate();
  useEffect(
    () => {
      if (localStorage.getItem("token")) {
        getUser();
      } else {
        navigate("/login");
      }
    }, // eslint-disable-next-line
    []
  );
  const [user, setUser] = useState({ name: "", email: "" });
  // get user
  const getUser = async () => {
    // API call
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setUser(json);
  };

  return (
    <div className="extra">
      <h2 className="mb-4"> User Details </h2>
      <div className="userdata">
        <img
          className="image"
          src="https://cdn.dribbble.com/users/175730/screenshots/17591022/media/68a0e0d7a1133c20cc14c463d94a4d72.png?compress=1&resize=400x300"
          alt="user"
        />
        <p className="hoverme">Hover Me</p>
        <div className="overlay">
          <h3 className="text">Name: {user.name}</h3>
          <h3 className="text">Email: {user.email}</h3>
        </div>
        {/* <div className="right">
            <div className="details">
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Userdata;
