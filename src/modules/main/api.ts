/**
 * JengaHR API module for making requests to the JengaHR API in a simple manner
 */
import Axios from "axios"

interface IAPIResources {
  CROPS: string
  POSTS: string
  DISEASES: string,
  SHOPPRODUCTS: string,
}

const API = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const token = localStorage.getItem("JW-token")
if (token) {
  if (!API.defaults.headers.common["Authorization"]) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }
}

/**
 * API resource endpoints currently used in the APP
 */
const APIResources: IAPIResources = {
  CROPS: "crop/",
  POSTS: "post/",
  DISEASES: "disease/",
  SHOPPRODUCTS: "shop-product/"
}

export { API, APIResources }
