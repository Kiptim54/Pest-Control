import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import { IProduct } from "../main/types"
import placeHolder from  "src/assets/images/logo.png"

const BrowseProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  //fetch shop products
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.SHOPPRODUCTS)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [])

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
        
        <div id="row" className="row">
          {products
            ? products?.map((d, i) => (
                <div key={`${d.id}`} className="col-md-3 col-sm-6 mb-5 shop">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.pesticide.image ? d.pesticide?.image : placeHolder} alt="..." className="shop-img" />
                    <div className="caption">
                      <h4>{d.pesticide?.name}</h4>
                      <span>
                        {d.shop?.name}, {d.shop?.city}
                      </span>
                      <p className="m-0">{d.shop?.phone}</p>
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
