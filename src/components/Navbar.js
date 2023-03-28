import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

// const [navOpen, setNavOpen] = useState(false);    // way to toogle the navbar

// function toggleNav() {
//   setNavOpen((state) => !state);
// }

// <button
//   onClick={toggleNav}
//   className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
//   type="button"
//   data-bs-toggle="collapse"
//   data-bs-target="#navbarNav"
//   aria-controls="navbarNav"
//   aria-expanded="false"
//   aria-label="Toggle navigation"
// ></button>;

const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={collapseNav}>
            eNoteBook
          </NavLink>

          <button
            ref={navButton}
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={linksContainerRef}
          >
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
