/**
 * JengaHR API module for making requests to the JengaHR API in a simple manner
 */
import Axios from "axios"

interface IAPIResources {
  CROPS: string
}

const API = Axios.create({
  baseURL: "http://161.35.20.228:7000/api/",
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
  CROPS: "crop",
}

export { API, APIResources }
