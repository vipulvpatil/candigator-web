"use client"
import * as yup from "yup"
import {useEffect, useRef, useState} from "react"
import BackButton from "./back_button"
import PageHeader from "@/components/page_header"
import SaveButton from "./save_button"
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
  // experience: yup.array().of(
  //   yup.object().shape({
  //     title: yup.string().required("required"),
  //     companyName: yup.string(),
  //     startingYear: yup.string(),
  //     endingYear: yup.string(),
  //     ongoing: yup.boolean(),
  //   })
  // )
})

const PersonaForm = ({candidate}) => {
  const form = useRef()
  const router = useRouter()
  const [candidatePersona, setCandidatePersona] = useState(null)
  const {register, handleSubmit, formState: {errors}} = useForm(
    {
      resolver: yupResolver(personaSchema),
      defaultValues: {
        name: candidate?.displayPersona["Name"],
        email: candidate?.displayPersona["Email"],
        phone: candidate?.displayPersona["Phone"],
        city: candidate?.displayPersona["City"],
        state: candidate?.displayPersona["State"],
        country: candidate?.displayPersona["Country"],
        yoe: candidate?.displayPersona["YoE"],
      }
    }
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
        className="w-[60%]"
        ref={form}
      >
        <EditablePersonaElement
          inputProps={register("name")}
          labelKey="name"
          labelText="Name"
          error={errors.name}
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("email")}
          labelKey="email"
          labelText="Email"
          error={errors.email}
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("phone")}
          labelKey="phone"
          labelText="Phone"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("city")}
          labelKey="city"
          labelText="City"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("state")}
          labelKey="state"
          labelText="State"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("country")}
          labelKey="country"
          labelText="Country"
        />
        <div className="h-4"/>
        <EditablePersonaElement
          inputProps={register("yoe")}
          labelKey="yoe"
          labelText="Years of Experience"
          error={errors.yoe}
        />
        {/* <div className="h-8"/>
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Experience"}
        </div>
        {(candidatePersona["Experience"] || []).map((exp) => {
          return <>
            <EditablePersonaElement
              inputProps={register("experience.title")}
              labelKey="title"
              labelText="Title"
              error={errors.experience?.title}
            />
          </>
        })} */}
      </form>

      <div className="">
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
      <SaveButton handleClick={
        () => {
          form.current.dispatchEvent(
            new Event("submit", {cancelable: true, bubbles: true})
        )}
      }/>
    </PageHeader>
    <div className="flex flex-row m-[22px]">
      <div className="
        flex-grow
        p-[22px] bg-white rounded-lg h-[637px] overflow-y-scroll
      ">
        {mainComponent}
      </div>
    </div>
  </>
}

const EditablePersonaElement = ({inputProps, labelKey, labelText, error}) => {
  return <div>
    <label
      htmlFor={labelKey}
      className="text-[16px] font-bold mb-2 text-black/60"
    >
      {labelText}
    </label>
    <input
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
