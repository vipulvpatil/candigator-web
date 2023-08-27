"use client"
import * as yup from "yup"
import {useEffect, useRef, useState} from "react"
import BackButton from "./back_button"
import PageHeader from "@/components/page_header"
import SaveButton from "./save_button"
import SubmitButton from "./submit_button"
import {useForm} from "react-hook-form"
import {useRouter} from "next/navigation"
import {yupResolver} from "@hookform/resolvers/yup"

const errorTextColor = ""
const errorStyle = ""

const personaSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email()
})

const PersonaForm = ({candidate}) => {
  const form = useRef()
  const router = useRouter()
  const [candidatePersona, setCandidatePersona] = useState(null)
  const {register, handleSubmit, formState: {errors}} = useForm(
    {resolver: yupResolver(personaSchema)}
  )
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
            htmlFor="name"
            className="text-[16px] font-bold mb-2 text-black/60"
          >
            {"Name"}
          </label>
          <input
            defaultValue={candidatePersona["Name"]}
            {...register("name")}
            className="
              text-[20px] font-semibold border-b-2 py-1 px-1 w-full
              outline-none bg-subtleColor/50 focus:bg-subtleColor/70
              text-black/80
            "
          />
          {errors.name && <span className="text-red-600 font-normal text-[16px]">{errors.name.message}</span>}
        </div>
        <div className="h-4"/>
        <div>
          <label
            htmlFor="email"
            className={"text-[16px] font-bold mb-2 text-black/60"}
          >
            {"Email"}
          </label>
          <input
            defaultValue={candidatePersona["Email"]}
            {...register("email")}
            className="
              text-[20px] font-semibold border-b-2 py-1 px-1 w-full
              outline-none bg-subtleColor/50 focus:bg-subtleColor/70
              text-black/80
            "
          />
          {errors.email && <span className="text-red-600 font-normal text-[16px]">{errors.email.message}</span>}
        </div>
        <SubmitButton handleClick={
          () => {new Event("submit", {cancelable: true, bubbles: true})}
        }/>
      </form>

      <div className="col-span-7">
        {candidatePersona["Name"]}
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
    <PageHeader title={`id: ${candidate && candidate.id}`}>
      <BackButton handleClick={() => router.back()}/>
      <SaveButton handleClick={() => router.back()}/>
    </PageHeader>
    <div className="flex flex-row m-[22px]">
      <div className="
        flex-grow grid grid-cols-7
        p-[22px] bg-white rounded-lg
      ">
        {mainComponent}
      </div>
    </div>
  </>
}

export default PersonaForm
