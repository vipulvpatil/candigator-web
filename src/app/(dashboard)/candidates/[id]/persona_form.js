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

const personaSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("must be a valid email"),
  yoe: yup.lazy((value) =>
    value === ""
      ? yup.string()
      : yup.number().typeError("must be a number")
  ),
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
        <EditablePersonaElement
          defaultValue={candidatePersona["Name"]}
          inputProps={register("name")}
          labelKey="name"
          labelText="Name"
          error={errors.name}
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["Email"]}
          inputProps={register("email")}
          labelKey="email"
          labelText="Email"
          error={errors.email}
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["Phone"]}
          inputProps={register("phone")}
          labelKey="phone"
          labelText="Phone"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["City"]}
          inputProps={register("city")}
          labelKey="city"
          labelText="City"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["State"]}
          inputProps={register("state")}
          labelKey="state"
          labelText="State"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["Country"]}
          inputProps={register("country")}
          labelKey="country"
          labelText="Country"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          defaultValue={candidatePersona["YoE"]}
          inputProps={register("yoe")}
          labelKey="yoe"
          labelText="Years of Experience"
          error={errors.yoe}
        />
        <div className="h-4"/>
        <SubmitButton handleClick={
          () => {new Event("submit", {cancelable: true, bubbles: true})}
        }/>
      </form>

      <div className="col-span-7">
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

const EditablePersonaElement = ({defaultValue, inputProps, labelKey, labelText, error}) => {
  return <div>
    <label
      htmlFor={labelKey}
      className="text-[16px] font-bold mb-2 text-black/60"
    >
      {labelText}
    </label>
    <input
      defaultValue={defaultValue}
      {...inputProps}
      className="
        text-[20px] font-semibold border-b-2 py-1 px-1 w-full
        outline-none bg-subtleColor/50 focus:bg-subtleColor/70
        text-black/80
      "
    />
    {error && <span className="text-red-600 font-normal text-[16px]">{error.message}</span>}
  </div>
}

export default PersonaForm
