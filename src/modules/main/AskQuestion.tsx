import React from "react"
import { Link, navigate } from "@reach/router"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Logo from "src/assets/images/named-logo.png"
import Counties from "src/assets/ke.json"
import Loader from "react-bootstrap/Spinner"

const AskQuestion = () => {
  const { register, handleSubmit, errors, setError, getValues } = useForm({
    criteriaMode: "all",
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      plant: "",
      description: "",
      user: "",
      image: "",
    },
  })

  const submitQuestion = (data: any) => {
    console.log(data)
  }
  return (
    <Row>
      <Col xs={12}>
        <form>
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
                  //   isInvalid={errors.name ? true : false}
                  required
                />

                {/* {errors.name && <Form.Control.Feedback type="invalid">{errors?.name?.message}</Form.Control.Feedback>} */}
              </Form.Group>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}

export default AskQuestion
