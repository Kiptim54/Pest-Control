import React from "react"
import { Contact } from "./Contact"
import { Process } from "./Process"
import { Link } from "@reach/router"

const LandingPage = () => {
  return (
    <div>
      {" "}
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>We value you</h1>
                  <p>Helping farmers to care better for their crops. Say goodbye to pests and diseases quicker with our help</p>
                  <Link to="/signup" className="btn btn-custom btn-lg page-scroll">
                    Join Us
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Process />
      <Contact />
    </div>
  )
}
export default LandingPage
