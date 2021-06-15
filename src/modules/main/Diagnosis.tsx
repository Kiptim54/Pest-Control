import React from "react";
import { Button } from "react-bootstrap"

const Diagnosis = () => {
  return (
  <div className="diagnosis">
    <div className="diagnosis__button">
      <button>Previous Problem</button>
      <button> New Problem</button>
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
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>Tomato</td>
            <td>Small pits or tiny holes on leaf surfaces</td>
            <td><img src="https://www.greenlife.co.ke/wp-content/uploads/rice_blast.jpg" alt="" width="100px" height="100px"></img></td>
            <td>Fruit is rarely damaged.Tretment is usually not required</td>
            <td>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</td>
            <td>Resolved</td>
          </tr>
          <tr>
            <td>Tomato</td>
            <td>Small pits or tiny holes on leaf surfaces</td>
            <td><img src="https://www.greenlife.co.ke/wp-content/uploads/rice_blast.jpg" alt="" width="100px" height="100px"></img></td>
            <td>Fruit is rarely damaged.Tretment is usually not required</td>
            <td>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</td>
            <td>Resolved</td>
          </tr>
          <tr>
            <td>Tomato</td>
            <td>Small pits or tiny holes on leaf surfaces</td>
            <td><img src="https://www.greenlife.co.ke/wp-content/uploads/rice_blast.jpg" alt=""></img></td>
            <td>Fruit is rarely damaged.Tretment is usually not required</td>
            <td>Control by eliminating weeds near filed edges and eliminating overwintering sites by removing site residual</td>
            <td>Resolved</td>
          </tr>
        </tbody>
      </table>
    </div>
   
    
  </div>
  )
}
export default Diagnosis