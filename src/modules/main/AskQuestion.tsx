import React, { useEffect, useState } from "react"
import { API, APIResources } from "src/modules/main/api"
import Skeleton from "react-loading-skeleton"

import { Link, navigate } from "@reach/router"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { MdArrowBack } from "react-icons/md"
import { ICrop, IPost, IDiseases } from "src/modules/main/types"
import Step1 from "./subs/step1"
import Step2 from "./subs/step2"

//material
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return ["Submit your Question", "Possible Options", "Feedback"]
}

const AskQuestion = () => {
  const [crops, setCrops] = useState<ICrop[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<any>()
  const [selectedCrop, setSelectedCrop] = useState<ICrop>()
  const [possibleDiseases, setPossibleDiseases] = useState<IDiseases[]>([])
  const [iseFetchingDiseses, setIsFetchingDiseases] = useState<boolean>(false)
  const [pestDiseases, setPestDiseases] = useState<IDiseases[]>([])
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [foundSolution, setFoundSolution] = useState<IDiseases>()
  const steps = getSteps()
  const [formValues, setFormValues] = useState({
    description: "",
    crop: "",
  })

  const { register, handleSubmit, errors, setError, getValues, watch, setValue } = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      description: "",
      crop: "",
      image: "",
    },
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  function getStepContent(stepIndex: any) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            isLoading={isLoading}
            handleNext={handleNext}
            crops={crops}
            errors={errors}
            setSelectedCrop={setSelectedCrop}
            setSelectedFile={setSelectedFile}
            register={register}
            handleSubmit={handleSubmit}
            submitQuestion={submitQuestion}
            isSubmitting={isSubmitting}
            watch={watch}
            setValue={setValue}
            formData={formValues}
            setFormData={setFormValues}
            selectedFile={selectedFile}
            foundCrop={foundSolution}
            setFoundCrop={setFoundSolution}
          />
        )
      case 1:
        return (
          <Step2
            possibleDiseases={possibleDiseases}
            crops={crops}
            handleBack={handleBack}
            handleNext={handleNext}
            selectedCrop={selectedCrop}
            foundCrop={foundSolution}
            setFoundCrop={setFoundSolution}
            formData={formValues}
            selectedFile={selectedFile}
          />
        )

      default:
        return (
          <Step1
            isLoading={isLoading}
            handleNext={handleNext}
            crops={crops}
            errors={errors}
            setSelectedCrop={setSelectedCrop}
            setSelectedFile={setSelectedFile}
            register={register}
            handleSubmit={handleSubmit}
            submitQuestion={submitQuestion}
            isSubmitting={isSubmitting}
            watch={watch}
            setValue={setValue}
            formData={formValues}
            setFormData={setFormValues}
            selectedFile={selectedFile}
            foundCrop={foundSolution}
            setFoundCrop={setFoundSolution}
          />
        )
    }
  }

  //fetch plants
  useEffect(() => {
    setIsLoading(true)
    API.get(APIResources.CROPS)
      .then((res) => {
        console.log(res.data)
        setCrops(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const submitQuestion = (data: IPost) => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append("description", data?.description)
    selectedFile && formData.append("image", selectedFile)
    formData.append("crop", data?.crop)

    API.post(APIResources.POSTS, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        toast.success(`Successfuly sent your question`)
        handleNext()
      })
      .catch((err) => {
        if (err.response.status === 400 && err.response.data.errors) {
          const apiErrorsObject = err.response.data.errors
          const keys: any[] = Object.keys(apiErrorsObject)
          keys.map((key) => {
            setError(key, {
              type: "manual",
              message: apiErrorsObject[key][0],
            })
          })
          toast.error("Please fix the errors on the form")
          setIsSubmitting(false)
        } else {
          toast.error("Error creating post please try again")
        }
      })
      .finally(() => setIsSubmitting(false))
  }

  useEffect(() => {
    API.get(`${APIResources.DISEASES}`)
      .then((res) => {
        setPestDiseases(res.data)
      })
      .catch((err) => console.log(err.response))
  }, [])

  useEffect(() => {
    const filtered: IDiseases[] = pestDiseases?.filter((disease) => {
      return Number(disease.crop) === Number(selectedCrop)
    })
    setPossibleDiseases(filtered)
  }, [selectedCrop])

  return (
    <Container style={{ minHeight: "90vh", padding: "2rem" }}>
      <Row>
        <Col xs={12}>
          <Link to="/diagnosis">
            <MdArrowBack size={20} /> Back to Past Questions
          </Link>
        </Col>
        <Col xs={12}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label} className="green">
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Col>
      </Row>
      {getStepContent(activeStep)}
    </Container>
  )
}

export default AskQuestion
