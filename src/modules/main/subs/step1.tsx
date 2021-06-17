import React, { Dispatch } from "react"

import Skeleton from "react-loading-skeleton"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Loader from "react-bootstrap/Spinner"
import { ICrop, IPost } from "src/modules/main/types"

interface IStep1 {
  crops: ICrop[] | undefined
  isLoading: Boolean
  errors: any
  handleNext: any
  register: any
  setSelectedCrop: Dispatch<ICrop>
  setSelectedFile: Dispatch<Blob>
  handleSubmit: any
  submitQuestion: any
  isSubmitting: boolean
}

const Step1 = (props: IStep1) => {
  const { crops, isLoading, errors, register, setSelectedCrop, setSelectedFile, handleSubmit, submitQuestion, isSubmitting } = props
  return (
    <Row className="justify-content-center p-3">
      <Col xs={7}>
        <form style={{ margin: "auto" }} onSubmit={handleSubmit(submitQuestion)}>
          <Row>
            <Col className="pb-4">
              <h4 className="green pb-0" style={{ fontWeight: "bold" }}>
                Submit a question
              </h4>
              <sub style={{ color: "gray", lineHeight: 0 }}>
                {"Please submit your queries and our team will get back to you in the next 24hrs "}
              </sub>
            </Col>
          </Row>

          <Row>
            <Col md={12} xs={12}>
              {isLoading ? (
                <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Select your Crop</Form.Label>
                  <Form.Control
                    as="select"
                    name="crop"
                    ref={register({ required: "Please select a crop" })}
                    isInvalid={errors?.crop ? true : false}
                    onClick={(e: any) => setSelectedCrop(e.target?.value)}
                  >
                    <option value="">Select Plant</option>
                    {crops?.map((crop) => (
                      <option value={crop?.id} key={crop?.name}>
                        {`${crop?.name} (${crop?.local_name})`}
                      </option>
                    ))}
                  </Form.Control>

                  {errors?.crop && <Form.Control.Feedback type="invalid">{errors?.crop?.message}</Form.Control.Feedback>}
                </Form.Group>
              )}
            </Col>
            <Col md={12} xs={12}>
              {isLoading ? (
                <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Description (Optional)</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="description"
                    ref={register({ required: "Please input your description" })}
                    isInvalid={errors.description ? true : false}
                  />

                  {errors.description && <Form.Control.Feedback type="invalid">{errors?.description?.message}</Form.Control.Feedback>}
                </Form.Group>
              )}
            </Col>

            <Col md={12} xs={12}>
              {isLoading ? (
                <Skeleton style={{ fontSize: 20, lineHeight: 2 }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Attach Photo (Optional)</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    name="image"
                    ref={register()}
                    isInvalid={errors.image ? true : false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.target.files && setSelectedFile(e.target?.files[0])
                    }}
                  />

                  {errors.image && <Form.Control.Feedback type="invalid">{errors?.image?.message}</Form.Control.Feedback>}
                </Form.Group>
              )}
            </Col>
            <Col xs={12}>
              <Button type="submit" className="green-btn">
                {isSubmitting ? <Loader animation="border" role="status" /> : "Next"}
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}

export default Step1
