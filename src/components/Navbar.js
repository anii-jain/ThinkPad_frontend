import React from "react";
import { useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const ref = useRef(null);
  let navigate = useNavigate();
  function collapseNav() {
    ref.current.click();
    // navButton.current.classList.add("collapsed");
    // linksContainerRef.current.classList.remove("show");
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logged Out", "success");
    navigate('/login');
    ref.current.click();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            eNoteBook
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
            {!localStorage.getItem('token') ? <form className="d-flex">
              <Link
                className="btn btn-primary mx-1"
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
            </form> : <button className="btn btn-primary" onClick={handleLogout}> Logout </button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
