"use client"
import * as yup from "yup"
import {useFieldArray, useForm} from "react-hook-form"
import BackButton from "./back_button"
import GenericEditButton from "./generic_edit_button"
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
      Title: yup.string(),
      "Company Name": yup.string(),
      "Starting Year": yup.string(),
      "Ending Year": yup.string(),
      Ongoing: yup.lazy((value) =>
        value === ""
          ? yup.string()
          : yup.boolean().typeError("must be 'true', 'false' or empty")
      ),
    })
  ),
  Education: yup.array().of(
    yup.object().shape({
      Institute: yup.string(),
      Qualification: yup.string(),
      CompletionYear: yup.string(),
    })
  ),
  "Tech Skills": yup.array().of(yup.string()),
  "Soft Skills": yup.array().of(yup.string()),
  "Recommended Roles": yup.array().of(yup.string()),
  Certificates: yup.array().of(yup.string())
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
        Education: candidate?.displayPersona["Education"],
        "Tech Skills": candidate?.displayPersona["Tech Skills"],
        "Soft Skills": candidate?.displayPersona["Soft Skills"],
        "Recommended Roles": candidate?.displayPersona["Recommended Roles"],
        Certificates: candidate?.displayPersona["Certificates"],
      }
    }
  )

  const {fields: experience}  = useFieldArray({name: "Experience", control})
  const {fields: education}  = useFieldArray({name: "Education", control})
  const {fields: techSkills}  = useFieldArray({name: "Tech Skills", control})
  const {fields: softSkills}  = useFieldArray({name: "Soft Skills", control})
  const {fields: recommendedRoles}  = useFieldArray({name: "Recommended Roles", control})
  const {
    fields: certificates,
    prepend: prependCertificate,
    remove: removeCertificate,
  }  = useFieldArray({name: "Certificates", control})

  const onSubmit = data => {
    console.log(data)
  }

  let mainComponent

  if (candidate) {
    mainComponent = <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        ref={form}
      >
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("Name")}
            labelKey="Name"
            labelText="Name"
            error={errors.Name}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("Email")}
            labelKey="Email"
            labelText="Email"
            error={errors.Email}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("Phone")}
            labelKey="Phone"
            labelText="Phone"
            error={errors.Phone}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("City")}
            labelKey="City"
            labelText="City"
            error={errors.City}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("State")}
            labelKey="State"
            labelText="State"
            error={errors.State}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("Country")}
            labelKey="Country"
            labelText="Country"
            error={errors.Country}
          />
        </div>
        <div className="h-4"/>
        <div className="w-[60%]">
          <EditablePersonaInputElement
            inputProps={register("YoE")}
            labelKey="YoE"
            labelText="Years of Experience"
            error={errors.YoE}
          />
        </div>
        <div className="h-8"/>
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Experience"}
        </div>
        {experience.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
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
        <div className="h-8"/>
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Education"}
        </div>
        {education.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
            <EditablePersonaInputElement
              inputProps={register(`Education.${index}.${"Institute"}`)}
              labelKey={`Education.${index}.${"Institute"}`}
              labelText="Institute"
              error={errors.Education?.[index]?.["Institute"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Education.${index}.${"Qualification"}`)}
              labelKey={`Education.${index}.${"Qualification"}`}
              labelText="Qualification"
              error={errors.Education?.[index]?.["Qualification"]}
            />
            <EditablePersonaInputElement
              inputProps={register(`Education.${index}.${"CompletionYear"}`)}
              labelKey={`Education.${index}.${"CompletionYear"}`}
              labelText="CompletionYear"
              error={errors.Education?.[index]?.["CompletionYear"]}
            />
          </div>
        })}
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Technical Skills"}
        </div>
        {techSkills.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
            <EditablePersonaInputElement
              inputProps={register(`Tech Skills.${index}`)}
              labelKey={`Tech Skills.${index}`}
              labelText=""
              error={errors?.["Tech Skills"]?.[index]}
            />
          </div>
        })}
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Soft Skills"}
        </div>
        {softSkills.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
            <EditablePersonaInputElement
              inputProps={register(`Soft Skills.${index}`)}
              labelKey={`Soft Skills.${index}`}
              labelText=""
              error={errors?.["Soft Skills"]?.[index]}
            />
          </div>
        })}
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Recommended Roles"}
        </div>
        {recommendedRoles.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
            <EditablePersonaInputElement
              inputProps={register(`Recommended Roles.${index}`)}
              labelKey={`Recommended Roles.${index}`}
              labelText=""
              error={errors?.["Recommended Roles"]?.[index]}
            />
          </div>
        })}
        <div className="text-[24px] font-bold mb-2 text-black/60">
          {"Certificates"}
          <GenericEditButton handleClick={()=> prependCertificate("")}>
            Add Certificate
          </GenericEditButton>
        </div>
        {certificates.map((field, index) => {
          return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
            <EditablePersonaInputElement
              inputProps={register(`Certificates.${index}`)}
              labelKey={`Certificates.${index}`}
              labelText=""
              error={errors?.["Certificates"]?.[index]}
              remove={()=> removeCertificate(index)}
            />
          </div>
        })}
      </form>
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

const EditablePersonaInputElement = (
  {inputProps, labelKey, labelText, error, remove, moveUp, moveDown}
) => {
  return <div>
    <label
      htmlFor={labelKey}
      className="text-[16px] font-bold mb-2 text-black/60"
    >
      {labelText}
    </label>
    <div className="flex flex-row">
      <input
        id={labelKey}
        {...inputProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 flex-grow inline
        "
      />
      <div className="">
        {remove && <GenericEditButton handleClick={remove}>
          Remove
        </GenericEditButton>}
        {remove && <GenericEditButton handleClick={moveUp}>
          &nbsp;&uarr;&nbsp;
        </GenericEditButton>}
        {remove && <GenericEditButton handleClick={moveDown}>
        &nbsp;&darr;&nbsp;
        </GenericEditButton>}
      </div>
    </div>
    {error && <span className="text-red-600 font-semibold text-[16px]">{error.message}</span>}
  </div>
}

export default PersonaForm
