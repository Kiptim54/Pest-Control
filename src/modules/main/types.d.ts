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

export { IPost, ICrop, IDiseases }
