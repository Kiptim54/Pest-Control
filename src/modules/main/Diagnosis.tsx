import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import { Button } from "react-bootstrap"
import { Link } from "@reach/router"
import { Container } from "@material-ui/core"
import { IPost, ICrop } from "src/modules/main/types"
import Skeleton from "react-loading-skeleton"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface IDiseases {
  id: string
  name: string
  disease_symptoms: string
  treatment_plan: string
  image: string
  date_created: string
  crop: string
}

const Diagnosis = () => {
  const [posts, setPosts] = useState<IPost[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [crops, setCrops] = useState<ICrop[]>([])

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

  //fetch diseases
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.POSTS)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [crops])

  return (
    <Container className="p-5">
      <div className="diagnosis">
        <div className="diagnosis__button">
          {/* <button>Previous Problem</button> */}
          <button className="green-btn">
            <Link to="/ask-question" style={{ color: "#ffff" }}>
              Add New Problem
            </Link>
          </button>
        </div>

        <div className="diagnosis__table">
          <table width="100%">
            <thead>
              <tr>
                <td>Plant Name</td>
                <td>Problem Description</td>
                <td>Images</td>
                <td>Treatment Plan</td>
                <td>Control</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Row>
                  <Col xs={12}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton width="100%" />
                  </Col>
                </Row>
              ) : (
                posts?.map((d) => (
                  <tr>
                    <td>{crops[Number(d?.crop)]?.name}</td>
                    <td>{d?.description}</td>
                    <td>
                      <img src={d?.image} alt=""></img>
                    </td>
                    {/* <td>{d?.treatment_plan}</td> */}
                    <td>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</td>
                    <td>
                      <Link to="/diagnosis/detail">&#62;</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
export default Diagnosis
