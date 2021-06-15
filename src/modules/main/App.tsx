import React from "react"
import Navbar from "src/components/Navbar"
import { Router, Redirect } from "@reach/router"

//components
import Login from "src/modules/authentication/Login"
import SignUp from "src/modules/authentication/SignUp"

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
        <GeneralRoute component={SignUp} path="/signup" />
        <GeneralRoute component={Login} path="/login" />
      </Router>
    </div>
  )
}

export default App
