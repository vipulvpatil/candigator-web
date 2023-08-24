"use client"
import {useEffect, useRef, useState} from "react"
import CandidatesIcon from "@/icons/candidates"
import CloseIcon from "@/icons/close"
import PageTitleWithCount from "@/components/page_title_with_count"
import SubmitButton from "./submit_button"
import {useForm} from "react-hook-form"
import {useRouter} from "next/navigation"

const errorTextColor = "text-red-600"
const regularLabelTextColor = "text-black/60"
const regularValueTextColor = "text-black/70"
const labelStyle = "text-[16px] font-bold mb-2"
const valueStyle = `
  text-[20px] font-semibold border-b-2 py-2 px-2 w-full
  bg-transparent outline-none
  focus:bg-black/5
  `
const errorStyle = "font-normal text-[16px]"

const PersonaForm = ({candidate}) => {
  const form = useRef()
  const router = useRouter()
  const [candidatePersona, setCandidatePersona] = useState(null)
  const {register, handleSubmit, formState: {errors}} = useForm()
  let mainComponent

  const onSubmit = data => console.log(data)

  useEffect(() => {
    if (!candidate) {
      setCandidatePersona(null)
    } else {
      const displayPersona = candidate.displayPersona
      setCandidatePersona(displayPersona)
    }
  }, [candidate])

  if (candidate && candidatePersona) {
    mainComponent = <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-7 w-[60%]"
        ref={form}
      >
        <div>
        <label
          htmlFor="email"
          className={`${labelStyle} ${
            errors.email ? errorTextColor : regularLabelTextColor
          }`}
        >
          {"Email"}
        </label>
        <input
          defaultValue={candidatePersona["Email"]}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /.+@.+..+/,
              message: "Email should be valid"
            }
          })}
          className={`
            ${valueStyle}
            ${errors.email ? errorTextColor : regularValueTextColor}
          `}
        />
        </div>
        {errors.email && <span className= {`${errorStyle} ${errorTextColor}`}>{errors.email.message}</span>}
        <SubmitButton handleClick={
          () => {new Event("submit", {cancelable: true, bubbles: true})}
        }/>
      </form>

      <div className="col-span-7">
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
      </div>
    </>
  }

  return <>
    <div className="col-span-5">
      <PageTitleWithCount icon={<CandidatesIcon/>} title={candidate && candidate.id}/>
    </div>
    <div className="col-span-2 text-right">
      <CloseButton onClose={() => router.back()}/>
    </div>
    {mainComponent}
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
