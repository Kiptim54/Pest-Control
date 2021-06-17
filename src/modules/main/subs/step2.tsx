import React, { Dispatch, useState } from "react"
import { Link, navigate } from "@reach/router"
import { API, APIResources } from "src/modules/main/api"
import { toast } from "react-toastify"
import Loader from "react-bootstrap/Spinner"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import { ICrop, IPost, IDiseases } from "src/modules/main/types"
import { useEffect } from "react"

interface IStep1 {
  crops: ICrop[] | undefined
  handleNext: any
  handleBack: any
  selectedCrop?: ICrop
  possibleDiseases: IDiseases[]
  foundCrop: IDiseases | undefined
  setFoundCrop: Dispatch<IDiseases>
  selectedFile: any
  formData: {
    crop: string
    description: string
  }
}

const Step2 = (props: IStep1) => {
  const { crops, selectedCrop, handleNext, handleBack, possibleDiseases, setFoundCrop, foundCrop, formData, selectedFile } = props
  const [images, setImages] = useState<IDiseases[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [contactingSupport, setContactingSupport] = useState<boolean>(false)

  useEffect(() => {
    possibleDiseases.length >= 1 && setImages(possibleDiseases)
  }, [possibleDiseases])

  const submitPost = (data: IDiseases) => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append("description", data.name)
    selectedFile && formData.append("image", selectedFile)
    formData.append("crop", data?.crop)

    API.post(APIResources.POSTS, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        toast.success(`Successfuly saved Solution`)
        navigate("/diagnosis")
      })
      .catch((err) => {
        toast.error("Error creating post please try again")
      })
      .finally(() => setIsSubmitting(false))
  }

  const submitQuestion = (data: { crop: string; description: string }) => {
    setContactingSupport(true)
    const formData = new FormData()
    formData.append("description", data?.description)
    selectedFile && formData.append("image", selectedFile)
    formData.append("crop", data?.crop)

    API.post(APIResources.POSTS, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        toast.success(`Successfuly sent your question. We will get back to you in the next 24hrs`)
        navigate("/diagnosis")
      })
      .catch((err) => {
        toast.error("Error creating post please try again")
        navigate("/ask-question")
      })
      .finally(() => setContactingSupport(false))
  }

  return (
    <>
      <Row className="justify-content-center p-3">
        {images.length >= 1 ? (
          <>
            <Row>
              <Col xs={12}>
                {" "}
                <h5 className="p-5" style={{ textAlign: "center" }}>
                  {/* <strong className="green">
                    Thank your for contacting us! Our team will reach out to you briefly. In the meantime, Some Possible Solutions for you?
                  </strong> */}
                  <strong className="green">Please select one?</strong>
                </h5>
              </Col>
            </Row>
            <Col xs={12} className="d-flex justify-content-around">
              {images.map((image: IDiseases) => {
                return (
                  <Col xs={6} key={image?.id} className="d-flex flex-column align-items-center">
                    <Form.Check
                      name="groupOptions"
                      className="p-4"
                      type="radio"
                      label="This matches my problem"
                      onClick={() => setFoundCrop(image)}
                    />
                    <Card style={{ minWidth: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={image?.image}
                        width="100%"
                        style={{ objectFit: "cover", maxHeight: "50vh", minHeight: "40vh" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <strong>{image?.name}</strong>
                        </Card.Title>
                        <Card.Text>
                          <strong>Symptoms: </strong>
                          {image?.disease_symptoms}
                        </Card.Text>
                        <Card.Text>
                          <strong>Treatment Plan: </strong>
                          {image?.treatment_plan}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    {/* {/* {image?.pesticide && (
                          <Button className="green-btn" href={image?.pesticide}>
                            View Pesticide
                          </Button>
                        )} */}
                  </Col>
                )
              })}
            </Col>
          </>
        ) : (
          <h5 className="green">
            {" "}
            <strong>
              Unfortunately we do not have records of similar pests. Please click on the ' Contact Support' button to send us your query
            </strong>
          </h5>
        )}
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-between">
          <Button onClick={() => foundCrop && submitPost(foundCrop)} className="green-btn">
            {isSubmitting ? <Loader animation="border" role="status" /> : "Found My Solution"}
          </Button>
          <Button className="green-btn" onClick={() => submitQuestion(formData)}>
            {contactingSupport ? <Loader animation="border" role="status" /> : "Contact Support"}
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Step2
