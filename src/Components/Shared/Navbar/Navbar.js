import React from "react";
import './Navbar.css';

import logo from "../../../Images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="main-logo" width="30" height="24" class="d-inline-block align-text-top"/>
          Aqua Architect House
        </a>

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-5 ms-auto gap-5">
                    <li className="nav-item ">
                        <a className="nav-link active " aria-current="page" href="/about">
                            <h6>About</h6>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/project">
                            <h6>Projects</h6>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/contact">
                            <h6>Contact</h6>
                        </a>
                    </li>
                    <button className="nav-item main-button">Get A quote Today</button>
                </ul>
            </div>
            </div>
    </nav>
      </div>
    </nav>
  );
};

export default Navbar;
