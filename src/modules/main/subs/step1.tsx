import React, { Dispatch } from "react"

import Skeleton from "react-loading-skeleton"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { ICrop, IDiseases, IPost } from "src/modules/main/types"
import { watch } from "fs"
import { useEffect } from "react"

interface IStep1 {
  crops: ICrop[] | undefined
  isLoading: Boolean
  errors: any
  register: any
  setSelectedCrop: Dispatch<ICrop>
  setSelectedFile: Dispatch<Blob>
  selectedFile: any
  handleSubmit: any
  submitQuestion: any
  isSubmitting: boolean
  watch: any
  setValue: any
  setFormData: any
  formData: {
    crop: string
    description: string
  }
  handleNext: any
  foundCrop?: IDiseases | undefined
  setFoundCrop: Dispatch<IDiseases>
}

const Step1 = (props: IStep1) => {
  const {
    crops,
    isLoading,
    errors,
    register,
    setSelectedCrop,
    setSelectedFile,
    handleSubmit,
    submitQuestion,
    watch,
    setValue,
    formData,
    setFormData,
    selectedFile,
    handleNext,
  } = props

  const cropValue = watch("crops")

  useEffect(() => {
    setValue("crop", formData.crop)
    setValue("description", formData.description)
  })

  return (
    <Row className="justify-content-center p-3">
      <Col xs={7}>
        <form style={{ margin: "auto" }}>
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
                <Skeleton style={{ fontSize: 20, lineHeight: 2, marginBottom: "2rem" }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Select your Crop</Form.Label>
                  <Form.Control
                    as="select"
                    name="crop"
                    ref={register({ required: "Please select a crop" })}
                    isInvalid={errors?.crop ? true : false}
                    onClick={(e: any) => setSelectedCrop(e.target?.value)}
                    onChange={(e: any) =>
                      setFormData((prevState: IPost) => {
                        return { ...prevState, crop: e.target?.value }
                      })
                    }
                    defaultValue={formData.crop}
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
                <Skeleton style={{ fontSize: 20, lineHeight: 2, marginBottom: "2rem" }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Please explain your problem"
                    name="description"
                    ref={register({ required: "Please input your description" })}
                    isInvalid={errors.description ? true : false}
                    onChange={(e: any) =>
                      setFormData((prevState: IPost) => {
                        return { ...prevState, description: e.target?.value }
                      })
                    }
                    defaultValue={formData.description}
                    required
                  />

                  {errors.description && <Form.Control.Feedback type="invalid">{errors?.description?.message}</Form.Control.Feedback>}
                </Form.Group>
              )}
            </Col>

            <Col md={12} xs={12}>
              {isLoading ? (
                <Skeleton style={{ fontSize: 20, lineHeight: 2, marginBottom: "2rem" }} />
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Attach Photo (Optional)</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    name="image"
                    ref={register()}
                    accept="image/*"
                    isInvalid={errors.image ? true : false}
                    onClick={(e: any) => {
                      e.target.files && setSelectedFile(e.target?.files[0])
                    }}
                    defaultValue={selectedFile || ""}
                  />

                  {errors.image && <Form.Control.Feedback type="invalid">{errors?.image?.message}</Form.Control.Feedback>}
                </Form.Group>
              )}
            </Col>
            <Col xs={12} className="d-flex justify-content-end">
              <Button onClick={() => handleNext()} className="green-btn" type="submit">
                {/* {isSubmitting ? <Loader animation="border" role="status" /> : "Next"} */}
                Next
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}

export default Step1
