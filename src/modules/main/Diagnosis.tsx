import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import { Button } from "react-bootstrap"
import { Link } from "@reach/router"

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
  const [diseases, setDiseases] = useState<IDiseases[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  //fetch diseases
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.DISEASES)
      .then((res) => {
        console.log(res.data)
        setDiseases(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="diagnosis">
      <div className="diagnosis__button">
        <button>Previous Problem</button>
        <button className="green-btn">
          <Link to="/ask-question" style={{ color: "#ffff" }}>
            New Problem
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
            {diseases?.map((d) => (
              <tr>
                <td>{d?.crop}</td>
                <td>{d?.disease_symptoms}</td>
                <td>
                  <img src={d?.image} alt=""></img>
                </td>
                <td>{d?.treatment_plan}</td>
                <td>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</td>
                <td>
                  <Link to="/diagnosis/detail">&#62;</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Diagnosis
