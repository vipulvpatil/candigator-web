"use client"
import {useEffect, useState} from "react"
import CloseIcon from "@/icons/close"
import {useRouter} from "next/navigation"

const PersonaForm = ({candidate}) => {
  const router = useRouter()
  const [candidatePersona, setCandidatePersona] = useState(null)

  useEffect(() => {
    if (!candidate) {
      setCandidatePersona(null)
    } else {
      const displayPersona = candidate.displayPersona
      setCandidatePersona(displayPersona)
    }
  }, [candidate])

  if (!candidate || !candidatePersona) {
    return <>
      <CloseButton onClose={() => router.back()}/>
    </>
  }

  return <>
    <CloseButton onClose={() => router.back()}/>
    {candidatePersona["Email"]}
    {candidatePersona["Phone"]}
    {candidatePersona["City"]}
    {candidatePersona["State"]}
    {candidatePersona["Country"]}
    {candidatePersona["YoE"]}
    {(candidatePersona["Experience"] || []).map((exp) => {
      return <>
        {exp["Title"]}
        {exp["Company Name"]}
        {`${exp["Starting Year"]} - ${exp["Ending Year"]}`}
      </>
    })}
    {(candidatePersona["Education"] || []).map((edu) => {
      return <>
        {edu["Institute"]}
        {edu["Qualification"]}
        {edu["CompletionYear"]}
      </>
    })}
    {(candidatePersona["Tech Skills"] || []).map((skill) => {
      return <>{skill}</>
    })}
    {(candidatePersona["Soft Skills"] || []).map((skill) => {
      return <>{skill}</>
    })}
    {(candidatePersona["Recommended Roles"] || []).map((role) => {
      return <>{role}</>
    })}
    {(candidatePersona["Certificates"] || []).map((cert) => {
      return <>{cert}</>
    })}
  </>
}

const CloseButton = ({onClose}) => {
  return (
    <button
      className="
        align-middle w-[34px] h-[34px]
        fill-button hover:fill-buttonDark
        ml-2"
      onClick={onClose}
    >
      <CloseIcon/>
    </button>
  )
}

export default PersonaForm
