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
import Layout from "src/components/Layout"
import AskQuestion from "src/modules/main/AskQuestion"
//toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

  if (localStorage.getItem("isLoggedIn")) {
    console.log("not found")
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
      <Router primary={false}>
        <Layout path="/">
          <GeneralRoute component={LandingPage} path="/" />
          <GeneralRoute component={Diagnosis} path="/diagnosis" />
          <GeneralRoute component={DetailDiagnosis} path="/diagnosis/detail" />
          <GeneralRoute component={BrowseProducts} path="/shop" />
          <GeneralRoute component={AskQuestion} path="/ask-question" />
        </Layout>
        <GeneralRoute component={SignUp} path="/signup" />
        <GeneralRoute component={Login} path="/login" />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
