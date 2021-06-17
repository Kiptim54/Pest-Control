import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import { IProduct } from "../main/types"
import placeHolder from "src/assets/images/logo.png"
import { Dropdown } from "react-bootstrap"
import { MdFilterList } from "react-icons/md"

const BrowseProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [regionalProducts, setRegionalProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const userRegion = localStorage.getItem("region")
  const [filterOption, setFilterOption] = useState<string>("")

  //fetch shop products
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.SHOPPRODUCTS)
      .then((res) => {
        if (userRegion) {
          const filteredProducts = res.data?.filter((good: IProduct) => {
            return good?.shop?.city?.toUpperCase() === userRegion?.toUpperCase()
          })
          setRegionalProducts(filteredProducts)
          setFilterOption(` ${userRegion} products`)
        }

        setProducts(res?.data)
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [userRegion])

  return (
    <div id="shop" className="text-center " style={{ minHeight: "90vh" }}>
      <div className="container">
        <div className="section-title">
          <div className="input-group mb-4 border rounded-pill p-1 move-right">
            <input type="search" placeholder="Search here" aria-describedby="button-addon3" className="form-control bg-none border-0" />
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-link text-success">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        {userRegion && (
          <div>
            <Dropdown className="p-5 mr-auto">
              <Dropdown.Toggle className="green-btn" id="dropdown-basic" style={{ minWidth: "200px" }}>
                <MdFilterList style={{ marginRight: "1rem" }} /> {filterOption || "Filter"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilterOption(` ${userRegion} products`)}>Filter {userRegion} products</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterOption("All")}>All products</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        {filterOption !== "All" && userRegion ? (
          <>
            <div id="row" className="row justify-content-center">
              {regionalProducts.length >= 1 ? (
                regionalProducts?.map((d, i) => (
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
              ) : (
                <h4 className="green">{`There are not products linked to ${userRegion}`}</h4>
              )}
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  )
}
export default BrowseProducts
