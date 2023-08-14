import {useEffect, useState} from "react"
import CandidateDetailElement from "./candidate_details_elements"
import CloseIcon from "@/icons/close"

const labelFont = "text-[18px] font-normal text-black/50"
const valueFont = "text-[20px] font-semibold text-black/70"
const subValueFont = "text-[18px] font-normal text-black/70"

const CandidateDetails = ({candidate, onClose}) => {
  const [candidatePersona, setCandidatePersona] = useState(null)
  const [candidateName, setCandidateName] = useState(null)
  const [candidateContactDetails, setCandidateContactDetails] = useState(null)
  const [candidateExperience, setCandidateExperience] = useState(null)
  useEffect(() => {
    if (!candidate) {
      setCandidatePersona(null)
      setCandidateName(null)
      setCandidateContactDetails(null)
      setCandidateExperience(null)
      return
    }

    const displayPersona = candidate.displayPersona
    console.log(displayPersona)

    setCandidateName(displayPersona["Name"])

    setCandidateContactDetails({
      "Email": displayPersona["Email"],
      "Phone": displayPersona["Phone"],
      "City": displayPersona["City"],
      "State": displayPersona["State"],
      "Country": displayPersona["Country"]
    })

    setCandidateExperience({
      "YoE": displayPersona["YoE"],
      "Experience": displayPersona["Experience"]
    })

    setCandidatePersona({
      "Tech Skills": displayPersona["Tech Skills"],
      "Soft Skills": displayPersona["Soft Skills"],
      "Recommended Roles": displayPersona["Recommended Roles"],
      "Education": displayPersona["Education"],
      "Certifications": displayPersona["Certifications"],
      "BuilderVersion": displayPersona["BuilderVersion"],
      "BuiltBy": displayPersona["BuiltBy"],
      "FileUploadId": displayPersona["FileUploadId"]
    })

  }, [candidate])

  if (!candidatePersona) {
    return <></>
  }

  return (
    <div
      className="
        absolute right-0 top-[87px]
        w-[600px] h-[722px]
        p-[22px]
      bg-white rounded-l-lg
        drop-shadow-modalLeft
        backdrop-blur-none
        overflow-y-scroll
      "
      // The backdrop-blur-none is needed to fix dropshadow issue in safari.
    >
      <button
        className="float-right align-middle w-[34px] fill-button hover:fill-buttonDark"
        onClick={() => onClose()}
      >
        <CloseIcon/>
      </button>
      <div className="">
        <div className="text-[24px] font-normal text-black/70 leading-none">
          {candidate.id}
        </div>
      </div>
      <CandidateSimpleElement label={"Name"} value={candidateName}/>
      <div className="h-2"/>
      <CandidateContactDetails candidateContactDetails={candidateContactDetails}/>
      <div className="h-2"/>
      <CandidateExperienceDetails candidateExperience={candidateExperience}/>
      <div className="h-2"/>
      {Object.keys(candidatePersona).map((key) => {
        const data = candidatePersona[key]
        return <div key={key}>
          <CandidateDetailElement label={key} value={data}/>
        </div>
      })}
    </div>
  )
}

const CandidateContactElement = ({label, value}) => {
  return <>
    {label && <div className={`${labelFont}`}>
      {label}
    </div>}
    {value && <div className={`${valueFont} leading-none overflow-x-scroll overflow-y-clip`}>
      {value}
    </div>}
  </>
}

const CandidateContactDetails = ({candidateContactDetails}) => {
  const email = candidateContactDetails["Email"]
  const phone = candidateContactDetails["Phone"] || "N/A"
  const city = candidateContactDetails["City"] || "N/A"
  const state = candidateContactDetails["State"] || "N/A"
  const country = candidateContactDetails["Country"] || "N/A"

  return <div className="border-solid border-2 border-subtle/50 rounded-md clear-both">
    <div className="clear-both">
      <div className="w-[50%] inline-block border-subtle/50 border-r-2 border-b-2 p-1">
        <CandidateContactElement label="Email" value={email}/>
      </div>
      <div className="w-[50%] inline-block border-subtle/50 border-b-2 p-1">
        <CandidateContactElement label="Phone" value={phone}/>
      </div>
    </div>
    <div className="clear-both">
      <div className="w-[33%] inline-block border-subtle/50 border-r-2 p-1">
        <CandidateContactElement label="City" value={city}/>
      </div>
      <div className="w-[33%] inline-block border-subtle/50 border-r-2 p-1">
        <CandidateContactElement label="State" value={state}/>
      </div>
      <div className="w-[33%] inline-block p-1">
        <CandidateContactElement label="Country" value={country}/>
      </div>
    </div>
  </div>
}

const CandidateExperienceDetails = ({candidateExperience}) => {
  const data = candidateExperience["Experience"] || []
  return <div className="border-solid border-2 border-subtle/50 rounded-md p-1">
    <CandidateSimpleElement label={"Years of experience"} value={candidateExperience["YoE"]}/>
    {data.map((value, i) => {
      let spaceElement = <div className="h-1"/>
      let element = <CandidateExperienceElement values={value}/>
      return <div key={i} className="border-solid border-t-2 border-subtle/50">
        {spaceElement}
        {element}
      </div>
    })}
  </div>
}

const CandidateExperienceElement = ({values}) => {
  return <div>
    <CandidateSimpleElement value={values["Title"]}/>
    <CandidateDetailLeftAndRightFloat
      leftValue={values["Company Name"]}
      rightValue={`${values["Starting Year"]} - ${values["Ending Year"]}`}
    />
  </div>
}

const CandidateDetailLeftAndRightFloat = ({leftValue, rightValue}) => {
  return <>
    <div className={`${subValueFont} py-1 leading-none float-left`}>
      {leftValue}
    </div>
    <div className={`${subValueFont} py-1 leading-none float-right`}>
      {rightValue}
    </div>
    <div className="clear-both"/>
  </>
}

const CandidateSimpleElement = ({label, value}) => {
  return <>
    {label && <div className={`${labelFont} inline-block`}>
      {label}
    </div>}
    {value && <div className={`${valueFont} leading-none`}>
      {value}
    </div>}
  </>

}

export default CandidateDetails
