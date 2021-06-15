import React, { useState } from "react"
import { Link } from "@reach/router"
import { useForm } from "react-hook-form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Logo from "src/assets/images/named-logo.png"

interface ILogin {
  email: string
  password: string
}

const Login = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<ILogin>({
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const [seePassword, setSeePassword] = useState<boolean>(false)

  const submitHandler = (data: ILogin) => {
    console.log("this is the submitted data", data)
  }
  return (
    <Container fluid className="d-flex justify-content-center flex-column vh-90 p-5">
      <Row className="justify-content-center">
        <Col md={5} sm={8}>
          <Card style={{ minWidth: "18rem", margin: "auto" }} className="boxShadow">
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                <img src={Logo} alt="login-logo" width="250px" />

                <br />
              </div>
              <div style={{ textAlign: "center" }} className="py-3">
                <h4 style={{ fontWeight: "bold" }}>Sign In</h4>
                <sub>
                  No account? <Link to="/signup">Sign Up</Link>
                </sub>
                <br />
              </div>

              <Form onSubmit={handleSubmit(submitHandler)} className="p-3">
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="name@gamil.com"
                    ref={register({ required: "Please input your email" })}
                    // isValid={errors?.email ? false : true}
                    isInvalid={errors?.email ? true : false}
                  />

                  {errors?.email && <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    ref={register({ required: "Please input your password" })}
                    type={seePassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="error"
                    name="password"
                    // isValid={errors?.password ? false : true}
                    isInvalid={errors?.password ? true : false}
                  />

                  {errors?.password && <Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group className="mt-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="See Password" checked={seePassword} onClick={() => setSeePassword(!seePassword)} />
                </Form.Group>
                <div className="d-flex justify-content-center pt-4">
                  <Button className="btn green-btn" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
