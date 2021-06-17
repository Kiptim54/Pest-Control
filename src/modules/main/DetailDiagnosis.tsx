import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
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

const DetailDiagnosis = () => {
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
    <div className="detaildiagnosis__details">
      {diseases?.map((d) => (
        <div className="detaildiagnosis">
          <h1>{d?.crop} </h1>
          <strong>Signs and Symptoms</strong>
          <p>{d?.disease_symptoms}</p>
          <p>
            <img src={d?.image} alt="" width="500px" height="250px"></img>
          </p>
          <strong>Treatment Plan</strong>
          <p>{}d?.treatment_plan</p>
          <strong>Products used for treatment(if any)</strong>
          <div className="detaildiagnosis__product">
            <div className="detaildiagnosis__productlist">
              <strong>Product Name</strong>
              <p>
                <Link to="/shop">Pyrethrins</Link>
              </p>
            </div>
            <div className="detaildiagnosis__productlist">
              <strong>Usage</strong>
              <p>Pesticides should be applied immediately after egg hatch or 7 to 10 days after females begin to appear in June</p>
            </div>
            <div className="detaildiagnosis__productlist">
              <strong>Notes</strong>
              <p>
                Pesticides treatments are difficult since the larva is only active outside the palnt for a few days between egg hatch and
                tunneling activity. Watch for flat white egg masses on leaf surfaces, or use black-light insect traps to scout for adult
                females in mid-June.
              </p>
            </div>
          </div>
          <strong>Control</strong>
          <p>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</p>
          <strong>Status</strong>
          <p>Resolved</p>
          <strong>Discussion</strong>
          <p>
            <textarea rows={10} cols={70}>
              Write your message here
            </textarea>
          </p>
          <div className="detaildiagnosis">
            <button>Submit</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default DetailDiagnosis
