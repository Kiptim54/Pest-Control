interface ICrop {
  id: string
  name: string
  scientific_name: string
  local_name: string
  image: string
}

interface IPost {
  id: string
  description: string
  image: string
  date_created: string
  crop: string
  owner: string
}

interface IDiseases {
  id: sring
  name: string
  disease_symptoms: string
  treatment_plan: string

  image: string
  crop: string
  pesticide: string
}

interface IProduct {
  id: string
  price: string
  shop: IShop
  pesticide: IPesticide
}

interface IPesticide {
  id: string,
  name: string,
  image: string
}

interface IShop {
  id: string,
  name: string,
  city: string,
  phone: string,
}

export { IPost, ICrop, IDiseases, IProduct }
