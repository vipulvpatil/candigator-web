import {
  CandidateCertDetails,
  CandidateContactDetails,
  CandidateEducationDetails,
  CandidateExperienceDetails,
  CandidateRoleDetails,
  CandidateSimpleElement,
  CandidateSkillDetails,
} from "./candidate_details_elements"
import {useEffect, useState} from "react"
import CloseIcon from "@/icons/close"

const CandidateDetails = ({candidate, onClose}) => {
  const [candidatePersona, setCandidatePersona] = useState(null)
  useEffect(() => {
    if (!candidate) {
      setCandidatePersona(null)
    } else {
      const displayPersona = candidate.displayPersona
      console.log(displayPersona)
      setCandidatePersona(displayPersona)
    }
  }, [candidate])

  if (!candidate || !candidatePersona) {
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
        <div className="text-[18px] font-normal text-black/50 leading-snug">
          {"id: "+candidate.id}
        </div>
        <div className="text-[28px] font-semibold text-black/70 leading-snug">
        {candidatePersona["Name"]}
      </div>
      </div>
      <div className="h-3"/>
      <CandidateContactDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateExperienceDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateEducationDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateSkillDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateRoleDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateCertDetails candidatePersona={candidatePersona}/>
      <div className="h-4"/>
      <CandidateSimpleElement label={"BuilderVersion"} value={candidatePersona["BuilderVersion"]}/>
      <CandidateSimpleElement label={"BuiltBy"} value={candidatePersona["BuiltBy"]}/>
      <div className="h-1"/>
      <CandidateSimpleElement label={"FileUploadId"} value={candidatePersona["FileUploadId"]}/>
      <div className="h-1"/>
    </div>
  )
}


export default CandidateDetails
