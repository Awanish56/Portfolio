import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-nav"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge  fs-3">PORTFOLIO</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5 ms-auto">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>

            <a className="nav-link" href="#about_us">
              About
            </a>
            <a className="nav-link" href="#Skills_me">
              Skills
            </a>
            <a className="nav-link" href="#project_me">
              Projects
            </a>
            <a className="nav-link" href="#contact_me">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
