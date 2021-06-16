import React from "react"
import { Link } from "@reach/router"

const DetailDiagnosis = () => {
  return (
    <div className="detaildiagnosis__details">
      <div className="detaildiagnosis">
        <h1>Tomato </h1>
        <strong>Signs and Symptoms</strong>
        <p>Small pits or tiny holes on leaf surfaces</p>
        <p>
          <img src="https://www.greenlife.co.ke/wp-content/uploads/rice_blast.jpg" alt="" width="500px" height="250px"></img>
        </p>
        <strong>Treatment Plan</strong>
        <p>Fruit is rarely damaged.Tretment is usually not required</p>
        <strong>Products used for treatment(if any)</strong>
        <div className="detaildiagnosis__product">
          <div className="detaildiagnosis__productlist">
            <strong>Product Name</strong>
            <p>
              <Link to="">Pyrethrins</Link>
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
    </div>
  )
}
export default DetailDiagnosis
