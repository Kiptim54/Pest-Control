import React, { Dispatch, useState } from "react"
import { Link } from "@reach/router"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import { ICrop, IPost, IDiseases } from "src/modules/main/types"
import { useEffect } from "react"

interface IStep1 {
  crops: ICrop[] | undefined
  handleNext: any
  handleBack: any
  selectedCrop?: ICrop
  possibleDiseases: IDiseases[]
}

const Step2 = (props: IStep1) => {
  const { crops, selectedCrop, handleNext, handleBack, possibleDiseases } = props
  const [images, setImages] = useState<IDiseases[]>([])

  useEffect(() => {
    possibleDiseases.length >= 1 && setImages(possibleDiseases)
  }, [possibleDiseases])

  return (
    <>
      <Row className="justify-content-center p-3">
        {images.length >= 1 ? (
          <>
            <Row>
              <Col xs={12}>
                {" "}
                <h5 className="p-5" style={{ textAlign: "center" }}>
                  <strong className="green">
                    Thank your for contacting us! Our team will reach out to you briefly. In the meantime, Some Possible Solutions for you?
                  </strong>
                </h5>
              </Col>
            </Row>
            <Col xs={12} className="d-flex justify-content-center">
              {images.map((image: IDiseases) => {
                return (
                  <Col xs={6}>
                    <Card style={{ minWidth: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={image?.image}
                        width="100%"
                        style={{ objectFit: "cover", maxHeight: "50vh", minHeight: "40vh" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <strong>{image.name}</strong>
                        </Card.Title>
                        <Card.Text>
                          <strong>Symptoms: </strong>
                          {image.disease_symptoms}
                        </Card.Text>
                        <Card.Text>
                          <strong>Treatment Plan: </strong>
                          {image.treatment_plan}
                        </Card.Text>

                        {image?.pesticide && (
                          <Button className="green-btn" href={image.pesticide}>
                            View Pesticide
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Col>
          </>
        ) : (
          <h5 className="green">
            {" "}
            <strong>
              Thank your for contacting us! Unfortunately we do not have records of similar pests. Our team will reach out to you in the
              next 6hrs.
            </strong>
          </h5>
        )}
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-between">
          <Button onClick={handleBack} className="green-btn">
            Back
          </Button>
          <Button className="green-btn">
            <Link style={{ color: "#ffff" }} to="/diagnosis">
              View Past Questions
            </Link>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Step2
