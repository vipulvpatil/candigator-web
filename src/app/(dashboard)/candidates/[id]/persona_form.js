"use client"
import * as yup from "yup"
import {useFieldArray, useForm} from "react-hook-form"
import BackButton from "./back_button"
import PageHeader from "@/components/page_header"
import SaveButton from "./save_button"
import {useRef} from "react"
import {useRouter} from "next/navigation"
import {yupResolver} from "@hookform/resolvers/yup"

const personaSchema = yup.object().shape({
  Name: yup.string().required("required"),
  Email: yup.string().email("must be a valid email"),
  Phone: yup.string(),
  State: yup.string(),
  City: yup.string(),
  Country: yup.string(),
  YoE: yup.lazy((value) =>
    value === ""
      ? yup.string()
      : yup.number().typeError("must be a number")
  ),
  Experience: yup.array().of(
    yup.object().shape({
      Title: yup.string().required("required"),
      "Company Name": yup.string(),
      "Starting Year": yup.string(),
      "Ending Year": yup.string(),
      Ongoing: yup.lazy((value) =>
        value === ""
          ? yup.string()
          : yup.boolean().typeError("must be 'true', 'false' or empty")
      ),
      // yup.boolean("must be 'true' or 'false'").notRequired(),
    })
  )
})

const PersonaForm = ({candidate}) => {
  const form = useRef()
  const router = useRouter()
  const {register, handleSubmit, formState: {errors}, control} = useForm(
    {
      resolver: yupResolver(personaSchema),
      defaultValues: {
        Name: candidate?.displayPersona["Name"],
        Email: candidate?.displayPersona["Email"],
        Phone: candidate?.displayPersona["Phone"],
        City: candidate?.displayPersona["City"],
        State: candidate?.displayPersona["State"],
        Country: candidate?.displayPersona["Country"],
        YoE: candidate?.displayPersona["YoE"],
        Experience: candidate?.displayPersona["Experience"],
      }
    }
  )

  const {fields: experience}  = useFieldArray({name: "Experience", control})
  let mainComponent

  const onSubmit = data => {
    console.log(data)
  }

  if (candidate) {
    mainComponent = <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[60%]"
        ref={form}
      >
        <EditablePersonaInputElement
          inputProps={register("Name")}
          labelKey="Name"
          labelText="Name"
          error={errors.Name}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("Email")}
          labelKey="Email"
          labelText="Email"
          error={errors.Email}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("Phone")}
          labelKey="Phone"
          labelText="Phone"
          error={errors.Phone}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("City")}
          labelKey="City"
          labelText="City"
          error={errors.City}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("State")}
          labelKey="State"
          labelText="State"
          error={errors.State}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("Country")}
          labelKey="Country"
          labelText="Country"
          error={errors.Country}
        />
        <div className="h-4"/>
        <EditablePersonaInputElement
          inputProps={register("YoE")}
          labelKey="YoE"
          labelText="Years of Experience"
          error={errors.YoE}
        />
        <div className="h-8"/>
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Experience"}
        </div>
        {console.log(experience)}
        {experience.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4">
            <EditablePersonaInputElement
              inputProps={register(`Experience.${index}.${"Title"}`)}
              labelKey={`Experience.${index}.${"Title"}`}
              labelText="Title"
              error={errors.Experience?.[index]?.["Title"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Experience.${index}.${"Company Name"}`)}
              labelKey={`Experience.${index}.${"Company Name"}`}
              labelText="Company Name"
              error={errors.Experience?.[index]?.["Company Name"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Experience.${index}.${"Starting Year"}`)}
              labelKey={`Experience.${index}.${"Starting Year"}`}
              labelText="Starting Year"
              error={errors.Experience?.[index]?.["Starting Year"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Experience.${index}.${"Ending Year"}`)}
              labelKey={`Experience.${index}.${"Ending Year"}`}
              labelText="Ending Year"
              error={errors.Experience?.[index]?.["Ending Year"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Experience.${index}.${"Ongoing"}`)}
              labelKey={`Experience.${index}.${"Ongoing"}`}
              labelText="Ongoing"
              error={errors.Experience?.[index]?.["Ongoing"]}
            />
          </div>
        })}
      </form>

      <div className="">
        {(candidate?.displayPersona["Education"] || []).map((edu) => {
          return <>
            {edu["Institute"]}
            {edu["Qualification"]}
            {edu["CompletionYear"]}
          </>
        })}
        {(candidate?.displayPersona["Tech Skills"] || []).map((skill) => {
          return <>{skill}</>
        })}
        {(candidate?.displayPersona["Soft Skills"] || []).map((skill) => {
          return <>{skill}</>
        })}
        {(candidate?.displayPersona["Recommended Roles"] || []).map((role) => {
          return <>{role}</>
        })}
        {(candidate?.displayPersona["Certificates"] || []).map((cert) => {
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
          console.log(errors)
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

const EditablePersonaInputElement = ({inputProps, labelKey, labelText, error}) => {
  return <div>
    <label
      htmlFor={labelKey}
      className="text-[16px] font-bold mb-2 text-black/60"
    >
      {labelText}
    </label>
    <input
      id={labelKey}
      {...inputProps}
      className="text-[20px] font-semibold border-b-2 py-1 px-1 w-full
        outline-none bg-subtleColor/50 focus:bg-subtleColor/70
        text-black/80
      "
    />
    {error && <span className="text-red-600 font-semibold text-[16px]">{error.message}</span>}
  </div>
}

export default PersonaForm
