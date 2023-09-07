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
import EditIcon from "@/icons/edit"
import IconButton from "@/components/buttons/generic/icon_button"
import Link from "next/link"

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
        w-[600px] h-[642px] p-[22px] ml-[22px]
        bg-white rounded-lg
        overflow-y-scroll
        flex-grow-0 flex-shrink-0 basis-[600px]"
    >
      <IconButton
        handleClick={() => onClose()}
        additionalStyling="float-right ml-2"
      >
        <CloseIcon/>
      </IconButton>
      <Link href={`/candidates/${candidate.id}`}>
        <IconButton
          additionalStyling="float-right"
        >
          <EditIcon/>
        </IconButton>
      </Link>

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
      <CandidateSimpleElement label={"Updated"} value={candidate.updatedAtString}/>
      <CandidateSimpleElement label={"BuilderVersion"} value={`${candidatePersona["BuiltBy"] === "AI"?candidatePersona["BuilderVersion"]:"N/A"}`}/>
      <CandidateSimpleElement label={"BuiltBy"} value={candidatePersona["BuiltBy"]}/>
      <div className="h-1"/>
      <CandidateSimpleElement label={"FileUploadId"} value={
        candidatePersona["FileUploadId"]?
        <Link href={`/files/${candidatePersona["FileUploadId"]}`}>
          <div
            className="
              p-2 text-white bg-secondaryColor hover:bg-secondaryDarkColor
              w-fit leading-none rounded-md
            "
          >
            {candidatePersona["FileUploadId"]}
          </div>
        </Link>:
        "N/A"
      }/>
      <div className="h-1"/>
    </div>
  )
}


export default CandidateDetails
