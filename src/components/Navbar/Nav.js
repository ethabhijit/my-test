import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import profileIcon from "../../images/profile.svg";
import "./Navbar.css";

const NavComponent = () => {
  return (
    <Navbar id="navbar" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} id="logo-image" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="nav-link-container">
            <Nav.Link>
              <div className="input-group rounded">
                <div className="input-group-prepend-container ">
                  <i class="fas fa-map-marker-alt ml-2 mr-2"></i>
                </div>
                <select id="form-select">
                  <option value="">Gurugram</option>
                </select>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="input-group rounded p-0">
                <div className="input-group-prepend-container d-flex align-items-center">
                  <i class="fas fa-search ml-2 mr-2"></i>
                </div>
                <input
                  type="text"
                  id="form-text"
                  placeholder="Search near product and shop"
                />
                <div className="input-group-append-container">
                  <button id="input-group-append-btn">Search</button>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link>Category</Nav.Link>
            <Nav.Link>Login/Sign Up</Nav.Link>
            <Nav.Link>
              <div id="profile">
                <img src={profileIcon} alt="" />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
