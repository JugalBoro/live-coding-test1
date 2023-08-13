import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //Functionality : To Navigate different parts of Pages with different end-points

  //Purpose : guiding users, enhancing user experience, and maintaining consistent branding and
  //          functionality throughout a website or application.It helps users easily access
  //          different sections and features,making their interaction with the site more
  //          intuitive and efficient.
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              <a className="nav-link" href="/api-integration">
                API Integration
              </a>

              <a className="nav-link" href="/todo">
                TodoList Task
              </a>

              <a className="nav-link" href="/cart">
                Shopping Cart Task
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
