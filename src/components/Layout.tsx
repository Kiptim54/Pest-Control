import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Col, Container, Row } from "react-bootstrap"
// /components
import Footer from "src/components/Footer"
import Navbar from "src/components/Navbar"

interface LayoutInterface {
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutInterface & RouteComponentProps) => {
  return (
    <Container fluid className="p-0 m-0">
      <Row>
        <Col xs={12}>
          <Navbar />
          {props.children}
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}
export default Layout
