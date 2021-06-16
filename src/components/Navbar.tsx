import React from "react"
import Navbar from "react-bootstrap/Navbar"

import Nav from "react-bootstrap/Nav"
import { Link } from "@reach/router"

import Logo from "src/assets/images/logo.png"

const NavbarComponent = (): JSX.Element => {
  return (
    <Navbar className="justify-content-between navbar" expand="md" sticky="top">
      <Navbar.Brand as={Link} to="/">
        {<img src={Logo} width="50px" height="auto" alt="logo" />}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" navbarScroll>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#contact" className="page-scroll">
            Contact Us
          </Nav.Link>
          <Link to="/signup" className="btn btn-custom btn-custom-sm btn-lg page-scroll">
            Join Us
          </Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
