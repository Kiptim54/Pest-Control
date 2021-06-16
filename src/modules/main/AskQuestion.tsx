import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import Skeleton from "react-loading-skeleton"

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

interface ICrop {
  id: string
  name: string
  scientific_name: string
  local_name: string
  image: string
}

const AskQuestion = () => {
  const [crops, setCrops] = useState<ICrop[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { register, handleSubmit, errors, setError, getValues } = useForm({
    criteriaMode: "all",
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      description: "",
      plant: "",
      images: "",
      // image: "",
    },
  })

  //fetch plants
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.CROPS)
      .then((res) => {
        console.log(res.data)
        setCrops(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const submitQuestion = (data: any) => {
    console.log(data)
  }

  return (
    <Container style={{ minHeight: "100vh", padding: "2rem" }}>
      <Row>
        <Col xs={12}>
          <form>
            <Row>
              <Col>
                <h4 className="green" style={{ fontWeight: "bold" }}>
                  {" "}
                  Submit a question
                </h4>
              </Col>
            </Row>

            <Row>
              <Col md={8} xs={8}>
                {isLoading ? (
                  <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder=""
                      name="Description"
                      ref={register({ required: "Please input your name" })}
                      isInvalid={errors.description ? true : false}
                      required
                    />

                    {errors.description && <Form.Control.Feedback type="invalid">{errors?.description?.message}</Form.Control.Feedback>}
                  </Form.Group>
                )}
              </Col>
              <Col md={8} xs={8}>
                {isLoading ? (
                  <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select" name="region" ref={register({ required: "Region" })} isInvalid={errors?.plant ? true : false}>
                      <option value="">Select Plant</option>
                      {crops?.map((crop) => (
                        <option value={crop?.name} key={crop?.name}>
                          {crop?.name}
                        </option>
                      ))}
                    </Form.Control>

                    {errors?.plant && <Form.Control.Feedback type="invalid">{errors?.plant?.message}</Form.Control.Feedback>}
                  </Form.Group>
                )}
              </Col>
              <Col md={8} xs={8}>
                {isLoading ? (
                  <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder=""
                      name="Description"
                      ref={register({ required: "Please input your name" })}
                      isInvalid={errors.description ? true : false}
                      required
                    />

                    {errors.description && <Form.Control.Feedback type="invalid">{errors?.description?.message}</Form.Control.Feedback>}
                  </Form.Group>
                )}
              </Col>
              <Col xs={8}>
                <Button type="submit" className="green-btn">
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default AskQuestion
