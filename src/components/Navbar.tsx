import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import { toast } from "react-toastify"

import Nav from "react-bootstrap/Nav"
import { NavDropdown } from "react-bootstrap"
import { Link, navigate } from "@reach/router"

import Logo from "src/assets/images/logo.png"
import { useEffect } from "react"

const NavbarComponent = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(localStorage.getItem("isLoggedIn")))
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("email") || null)

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") || false
    status && setIsLoggedIn(true)
    const name = localStorage.getItem("email")
    name && setCurrentUser(name)
  }, [])

  const userLogout = () => {
    setIsLoggedIn(false)
    toast.success("successfully logged you out")
    return navigate("/login")
  }

  return (
    <Navbar className="justify-content-between navbar" expand="md">
      <Navbar.Brand as={Link} to="/">
        {<img src={Logo} width="50px" height="auto" alt="logo" />}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" navbarScroll>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link href="/#contact" className="page-scroll">
            Contact Us
          </Nav.Link>
          {isLoggedIn ? (
            // <Link to="" onClick={() => userLogout()} className="btn btn-custom btn-custom-sm btn-lg page-scroll">
            //   Logout{" "}

            // </Link>
            <NavDropdown title={currentUser || ""} id="nav-dropdown" style={{ right: "0", left: "auto" }}>
              <NavDropdown.Item as={Link} to="/ask-question">
                Ask Question
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/diagnosis">
                Past Questions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => userLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/signup" className="btn btn-custom btn-custom-sm btn-lg page-scroll">
              Join Us{" "}
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
