import React from "react"
import Navbar from "src/components/Navbar"
import { Router, Redirect } from "@reach/router"

//components
import Login from "src/modules/authentication/Login"
import SignUp from "src/modules/authentication/SignUp"
import Diagnosis from "./Diagnosis"
import DetailDiagnosis from "src/modules/main/DetailDiagnosis"
import LandingPage from "./LandingPage"
import BrowseProducts from "../shop/BrowseProducts"
import Footer from "src/components/Footer"

/**
 *
 * This function is used to create protected routes
 * It takes in a component and checks if a token exists
 * If not, it redirects to the login page
 * If it exits, redirect to the component passed in as props
 * @param props
 */
const PrivateRoute = (props: any) => {
  const { component: ChildComponent } = props

  if (localStorage.getItem("JW-token")) {
    return <ChildComponent {...props} />
  } else {
    return <Redirect to={"/login"} noThrow />
  }
}

const GeneralRoute = (props: any) => {
  const { component: ChildComponent } = props

  return <ChildComponent {...props} />
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <GeneralRoute component={LandingPage} path="/" />
        <GeneralRoute component={SignUp} path="/signup" />
        <GeneralRoute component={Login} path="/login" />
        <GeneralRoute component={Diagnosis} path="/diagnosis" />
        <GeneralRoute component={DetailDiagnosis} path="/diagnosis/detail" />
        <GeneralRoute component={BrowseProducts} path="/shop" />
      </Router>
      <Footer />
    </div>
  )
}

export default App
