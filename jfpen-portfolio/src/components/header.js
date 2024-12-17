import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PenguinIcon from './img/logoPic192.png';
import '../App.css';

function Header() {
  return (
    <Navbar className="NavBar-Background" expand="lg">
      <Navbar.Brand href="#home">
        <img

          src={PenguinIcon}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="JFPen Logo"


        />
        James Floyd
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;