import React from "react"
import JsonData from "./data.json"

const BrowseProducts = () => {
  return (
    <div id="shop" className="text-center">
      <div className="container">
        <div className='section-title'>
          <div className="input-group mb-4 border rounded-pill p-1 move-right">
            <input
              type="search"
              placeholder="Search here"
              aria-describedby="button-addon3"
              className="form-control bg-none border-0"
            />
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-link text-success">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center section-title mb-4">
            <p>Browse results for: <strong>{JsonData.Products[0]["product-name"]}</strong></p>
        </div>
        <div id="row" className="row">
          {JsonData.Products
            ? JsonData.Products.map((d, i) => (
                <div key={`${d["product-id"]}`} className="col-md-3 col-sm-6 mb-5 shop">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.image} alt="..." className="shop-img" />
                    <div className="caption">
                      <h4>{d["product-name"]}</h4>
                      <span>
                        {d["shop-name"]}, {d.city}
                      </span>
                      <p className="m-0">{d.phone}</p>
                      <h2>KES. {d.price}</h2>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  )
}
export default BrowseProducts
