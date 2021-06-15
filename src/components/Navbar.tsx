import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap"

import Logo from "src/assets/images/logo.png"

const NavbarComponent = (): JSX.Element => {
  return (
    <Navbar className="justify-content-between navbar test" expand="md">
      <Navbar.Brand href="/">{<img src={Logo} width="auto" height="50px" alt="logo" />}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" navbarScroll>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>

          <Button
            size="sm"
            className="removeOutline"
            style={{ alignSelf: "center", minWidth: "100px", background: "#7db569", border: "#7db569" }}
          >
            Join Us
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent