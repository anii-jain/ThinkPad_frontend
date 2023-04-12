import React from "react";
import { useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const ref = useRef(null);
  let navigate = useNavigate();
  function collapseNav() {
    window.innerWidth <= 991 && ref.current.click();
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged Out", "success");
    navigate("/login");
    window.innerWidth <= 991 && ref.current.click();
  };
  return (
    <div className="navb">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid mx-1">
          <NavLink className="navbar-brand" to="/">
            <strong>ThinkPad</strong>
          </NavLink>

          <button
            ref={ref}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={collapseNav}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                  onClick={collapseNav}
                >
                  About
                </NavLink>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mr-1"
                  to="/login"
                  role="button"
                  onClick={collapseNav}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                  onClick={collapseNav}
                >
                  SignUp
                </Link>
              </form>
            ) : (
              <div className="lognav" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <Link className="fa-solid fa-user mx-3" to="/account" onClick={collapseNav} style={{color:"black"}}></Link>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
