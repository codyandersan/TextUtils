import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* onClick={props.setAccent("blue")}
          nClick={props.setAccent("dark")}
          onClick={props.setAccent("red")}
          onClick={props.setAccent("green")} */}
          <div className="d-inline-flex mx-3 text-white">
            <div className="form-check mx-1 ">
              <input className="form-check-input bg-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />

            </div>
            <div className="form-check mx-1">
              <input className="form-check-input bg-dark" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />

            </div>
            <div className="form-check mx-1">
              <input className="form-check-input bg-danger" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />

            </div>
            <div className="form-check mx-1">
              <input className="form-check-input bg-success" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />

            </div>

          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'

}
