import React from "react"
import Navbar from "react-bootstrap/Navbar"

import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { Link } from "@reach/router"

import Logo from "src/assets/images/logo.png"

const NavbarComponent = (): JSX.Element => {
  return (
    <Navbar className="justify-content-between navbar test" expand="md">
      <Navbar.Brand href="/">{<img src={Logo} width="50px" height="auto" alt="logo" />}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" navbarScroll>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>

          <Button
            as={Link}
            size="sm"
            className="removeOutline green-btn btn"
            style={{ alignSelf: "center", minWidth: "100px", color: "white" }}
            to="/login"
          >
            Join Us
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
