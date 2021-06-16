import React, { useState, useEffect } from "react"
import { Link } from "@reach/router"
import { useForm } from "react-hook-form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Logo from "src/assets/images/named-logo.png"
import Counties from "src/assets/ke.json"

interface IUser {
  name: string
  email: string
  password: string
  region: string
  occupation: string
  confirm_password?: string
}

const SignUp = (): JSX.Element => {
  const { register, handleSubmit, errors, setError, getValues } = useForm<IUser>({
    criteriaMode: "all",
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      email: "",
      password: "",
      name: "",
      region: "",
      occupation: "",
      confirm_password: "",
    },
  })

  const [seePassword, setSeePassword] = useState<boolean>(false)

  const submitHandler = (data: IUser) => {
    if (String(data.password) !== String(data.confirm_password)) {
      setError("confirm_password", {
        type: "manual",
        message: "Password does not match",
      })
    } else {
      console.log("this is the submitted data", data)
    }
  }

  return (
    <Container fluid className="d-flex justify-content-center flex-column vh-90 ">
      <Row className="justify-content-center">
        <Col md={6} className="loginSide"></Col>
        <Col md={6} sm={8} className="p-5">
          {/* <Card style={{ minWidth: "18rem", margin: "auto" }} className="boxShadow">
            <Card.Body> */}
          <div style={{ textAlign: "center" }} className="pt-3">
            <img src={Logo} alt="login-logo" width="210px" />

            <br />
          </div>
          <div style={{ textAlign: "center" }} className="py-3">
            <h4 style={{ fontWeight: "bold" }}>Create Account</h4>
            <sub>
              Already have an account? <Link to="/login">Login</Link>
            </sub>
            <br />
          </div>

          <form onSubmit={handleSubmit(submitHandler)} className="p-3" noValidate>
            <Row>
              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="name"
                    ref={register({ required: "Please input your name" })}
                    // isValid={errors.name ? false : true}
                    isInvalid={errors.name ? true : false}
                    required
                  />

                  {errors.name && <Form.Control.Feedback type="invalid">{errors?.name?.message}</Form.Control.Feedback>}
                </Form.Group>
              </Col>
              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder=""
                    ref={register({ required: "Please input your email" })}
                    // isValid={errors?.email ? false : true}
                    isInvalid={errors?.email ? true : false}
                    required
                  />

                  {errors?.email && <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>}
                </Form.Group>
              </Col>
              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    as="select"
                    name="occupation"
                    ref={register({ required: "Please select Occupation" })}
                    isInvalid={errors?.occupation ? true : false}
                  >
                    <option value="">Select Occupation</option>
                    <option value="farmer">Farmer</option>
                    <option value="pathologist">Pathologist</option>
                  </Form.Control>

                  {errors?.occupation && <Form.Control.Feedback type="invalid">{errors?.occupation?.message}</Form.Control.Feedback>}
                </Form.Group>
              </Col>
              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Region</Form.Label>
                  <Form.Control as="select" name="region" ref={register({ required: "Region" })} isInvalid={errors?.region ? true : false}>
                    <option value="">Select Region</option>
                    {Counties?.map((county) => (
                      <option value={county.city} key={county.city}>
                        {county.city}
                      </option>
                    ))}
                  </Form.Control>

                  {errors?.region && <Form.Control.Feedback type="invalid">{errors?.region?.message}</Form.Control.Feedback>}
                </Form.Group>
              </Col>

              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    ref={register({ required: "Please input your password" })}
                    type={seePassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="error"
                    // isValid={errors?.password ? false : true}
                    isInvalid={errors?.password ? true : false}
                    required
                  />

                  {errors?.password && <Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group className="mt-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="See Password" checked={seePassword} onChange={() => setSeePassword(!seePassword)} />
                </Form.Group>
              </Col>
              <Col md={6} xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label> Confrirm Password</Form.Label>
                  <Form.Control
                    type={seePassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="error"
                    name="confirm_password"
                    ref={register({ required: "Please confirm password" })}
                    onChange={(e) => {
                      if (String(getValues("password")) === String(e?.target?.value)) {
                        return
                      } else {
                        return setError("confirm_password", {
                          type: "manual",
                          message: "Password does not match",
                        })
                      }
                    }}
                    // isValid={errors?.password ? false : true}
                    isInvalid={errors?.confirm_password ? true : false}
                    required
                  />

                  {errors?.confirm_password && (
                    <Form.Control.Feedback type="invalid">{errors?.confirm_password?.message}</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center pt-4">
              <Button className="btn green-btn" type="submit">
                Login
              </Button>
            </div>
          </form>
          {/* </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  )
}
export default SignUp
