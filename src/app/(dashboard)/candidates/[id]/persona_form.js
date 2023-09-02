"use client"
import * as yup from "yup"
import {useFieldArray, useForm} from "react-hook-form"
import {useRef, useState} from "react"
import BackButton from "@/components/back_button"
import GenericButton from "@/components/generic_button"
import PageHeader from "@/components/page_header"
import SaveButton from "@/components/save_button"
import clone from "just-clone"
import {useRouter} from "next/navigation"
import {yupResolver} from "@hookform/resolvers/yup"

const personaSchema = yup.object().shape({
  Name: yup.string().required("required"),
  Email: yup.string().required("required").email("must be a valid email"),
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
  ).max(10, "max limit (10) reached"),
  Education: yup.array().of(
    yup.object().shape({
      Institute: yup.string(),
      Qualification: yup.string(),
      CompletionYear: yup.string(),
    })
  ).max(5, "max limit (5) reached"),
  "Tech Skills": yup.array().of(yup.string()).max(5, "max limit (5) reached"),
  "Soft Skills": yup.array().of(yup.string()).max(5, "max limit (5) reached"),
  "Recommended Roles": yup.array().of(yup.string()).max(3, "max limit (3) reached"),
  Certifications: yup.array(yup.string()).max(5, "max limit (5) reached")
})

const updateCandidate = async (id, personaData, router) => {
  const body = JSON.stringify({
    id: id,
    manuallyCreatedPersona: JSON.stringify(personaData),
  })
  const resp = await fetch("/api/candidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  })

  const respJson = await resp.json()
  if (respJson.error) {
    console.log(respJson.error)
    return "saving failed"
  }
  console.log(respJson.data)
  const newId = respJson.data["id"]
  router.replace(`/candidates/${newId}`)
  return "saving succeeded"
}

const PersonaForm = ({candidate}) => {
  const form = useRef()
  const router = useRouter()

  const [statusText, setStatusText] = useState("")
  const [isSaving, setSaving] = useState(false)

  const {
    register, handleSubmit, formState: {errors}, control, getValues, setValue} = useForm(
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
        Certifications: candidate?.displayPersona["Certifications"],
      }
    }
  )

  const swap = (registeredElement, i, j) => {
    const temp = getValues(`${registeredElement}.${i}`)
    setValue(`${registeredElement}.${i}`, getValues(`${registeredElement}.${j}`))
    setValue(`${registeredElement}.${j}`, temp)
  }

  const {
    fields: experience,
    prepend: prependExperience,
    remove: removeExperience,
  }  = useFieldArray({name: "Experience", control})
  const {
    fields: education,
    prepend: prependEducation,
    remove: removeEducation,
  }  = useFieldArray({name: "Education", control})
  const {
    fields: techSkills,
    prepend: prependTechSkill,
    remove: removeTechSkill,
  }  = useFieldArray({name: "Tech Skills", control})
  const {
    fields: softSkills,
    prepend: prependSoftSkill,
    remove: removeSoftSkill,
  }  = useFieldArray({name: "Soft Skills", control})
  const {
    fields: recommendedRoles,
    prepend: prependRecommendedRole,
    remove: removeRecommendedRole,
  }  = useFieldArray({name: "Recommended Roles", control})
  const {
    fields: certifications,
    prepend: prependCertification,
    remove: removeCertification,
  }  = useFieldArray({name: "Certifications", control})

  const onSubmit = async data => {
    const sanitizedData = sanitizePersonaData(data)
    console.log(data)
    console.log(sanitizedData)
    setSaving(true)
    setStatusText("saving ...")
    const result = await updateCandidate(candidate?.id, sanitizedData, router)
    setStatusText(result)
    setSaving(false)
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
        <EditArrayCollection
          array={education}
          addLabel={"Add Experience"}
          label={"Experience"}
          maxElements={10}
          defaultElement={{
            Title: "",
            "Company Name": "",
            "Starting Year": "",
            "Ending Year": "",
            Ongoing: false,
          }}
          prependElement={prependExperience}
        >
          {experience.map((field, index) => {
            const handleRemove=()=> removeExperience(index)
            const handleMoveUp=index > 0 && (() => swap("Experience", index, index-1))
            const handleMoveDown=(index < experience.length-1) && (() => swap("Experience", index, index+1))
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
              <div>
                {handleRemove && <GenericButton handleClick={handleRemove} additionalStyling={"mt-2 px-3"}>
                  Delete
                </GenericButton>}
                {handleMoveUp && <GenericButton handleClick={handleMoveUp} additionalStyling={"ml-2 mt-2"}>
                  &nbsp;&uarr;&nbsp;
                </GenericButton>}
                {handleMoveDown && <GenericButton handleClick={handleMoveDown} additionalStyling={"ml-2 mt-2"}>
                  &nbsp;&darr;&nbsp;
                </GenericButton>}
              </div>
            </div>
          })}
        </EditArrayCollection>
        <div className="h-8"/>
        <EditArrayCollection
          array={education}
          addLabel={"Add Education"}
          label={"Education"}
          maxElements={5}
          defaultElement={{
            Institute: "",
            Qualification: "",
            CompletionYear: ""
          }}
          prependElement={prependEducation}
        >
          {education.map((field, index) => {
            const handleRemove=()=> removeEducation(index)
            const handleMoveUp=index > 0 && (() => swap("Education", index, index-1))
            const handleMoveDown=(index < education.length-1) && (() => swap("Education", index, index+1))
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
                {handleRemove && <GenericButton handleClick={handleRemove} additionalStyling={"mt-2 px-3"}>
                  Delete
                </GenericButton>}
                {handleMoveUp && <GenericButton handleClick={handleMoveUp} additionalStyling={"ml-2 mt-2"}>
                  &nbsp;&uarr;&nbsp;
                </GenericButton>}
                {handleMoveDown && <GenericButton handleClick={handleMoveDown} additionalStyling={"ml-2 mt-2"}>
                  &nbsp;&darr;&nbsp;
                </GenericButton>}
            </div>
          })}
        </EditArrayCollection>
        <EditArrayCollection
          array={techSkills}
          addLabel={"Add Skill"}
          label={"Technical Skills"}
          maxElements={5}
          defaultElement={""}
          prependElement={prependTechSkill}
        >
          {techSkills.map((field, index) => {
            return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
              <EditablePersonaInputElement
                inputProps={register(`Tech Skills.${index}`)}
                labelKey={`Tech Skills.${index}`}
                labelText=""
                error={errors?.["Tech Skills"]?.[index]}
                handleRemove={()=> removeTechSkill(index)}
                handleMoveUp={index > 0 && (() => swap("Tech Skills", index, index-1))}
                handleMoveDown={(index < techSkills.length-1) && (() => swap("Tech Skills", index, index+1))}
              />
            </div>
          })}
        </EditArrayCollection>
        <EditArrayCollection
          array={softSkills}
          addLabel={"Add Skill"}
          label={"Soft Skills"}
          maxElements={5}
          defaultElement={""}
          prependElement={prependSoftSkill}
        >
          {softSkills.map((field, index) => {
            return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
              <EditablePersonaInputElement
                inputProps={register(`Soft Skills.${index}`)}
                labelKey={`Soft Skills.${index}`}
                labelText=""
                error={errors?.["Soft Skills"]?.[index]}
                handleRemove={()=> removeSoftSkill(index)}
                handleMoveUp={index > 0 && (() => swap("Soft Skills", index, index-1))}
                handleMoveDown={(index < techSkills.length-1) && (() => swap("Soft Skills", index, index+1))}
              />
            </div>
          })}
        </EditArrayCollection>
        <EditArrayCollection
          array={recommendedRoles}
          addLabel={"Add Role"}
          label={"Recommended Roles"}
          maxElements={3}
          defaultElement={""}
          prependElement={prependRecommendedRole}
        >
          {recommendedRoles.map((field, index) => {
            return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
              <EditablePersonaInputElement
                inputProps={register(`Recommended Roles.${index}`)}
                labelKey={`Recommended Roles.${index}`}
                labelText=""
                error={errors?.["Recommended Roles"]?.[index]}
                handleRemove={()=> removeRecommendedRole(index)}
                handleMoveUp={index > 0 && (() => swap("Recommended Roles", index, index-1))}
                handleMoveDown={(index < recommendedRoles.length-1) && (() => swap("Recommended Roles", index, index+1))}
              />
            </div>
          })}
        </EditArrayCollection>
        <EditArrayCollection
          array={certifications}
          addLabel={"Add Certification"}
          label={"Certifications"}
          maxElements={5}
          defaultElement={""}
          prependElement={prependCertification}
        >
          {certifications.map((field, index) => {
            return <div key={field.id} className="p-2 border-2 rounded-sm border-subtleColor mb-4 w-[60%]">
              <EditablePersonaInputElement
                inputProps={register(`Certifications.${index}`)}
                labelKey={`Certifications.${index}`}
                labelText=""
                error={errors?.["Certifications"]?.[index]}
                handleRemove={()=> removeCertification(index)}
                handleMoveUp={index > 0 && (() => swap("Certifications", index, index-1))}
                handleMoveDown={(index < certifications.length-1) && (() => swap("Certifications", index, index+1))}
              />
            </div>
          })}
        </EditArrayCollection>
      </form>
    </>
  }

  return <>
    <PageHeader title={`${(candidate && candidate.id)?"Edit Candidate":"Add Candidate"}`}>
      <div className="
        inline pr-6 text-[18px] text-secondaryColor
        font-semibold align-middle
        relative top-2
      ">
        {statusText}
      </div>
      <BackButton handleClick={() => router.back()}/>
      <SaveButton
        handleClick={
          () => {
            console.log(errors)
            form.current.dispatchEvent(
              new Event("submit", {cancelable: true, bubbles: true})
          )}
        }
        disabled={isSaving}
      />
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

const sanitizePersonaData = (data) => {
  const personaData = clone(data)

  if(personaData["Phone"]?.trim().length === 0){
    delete personaData["Phone"]
  }
  if(personaData["State"]?.trim().length === 0){
    delete personaData["State"]
  }
  if(personaData["City"]?.trim().length === 0){
    delete personaData["City"]
  }
  if(personaData["Country"]?.trim().length === 0){
    delete personaData["Country"]
  }
  if(String(personaData["YoE"])?.trim().length === 0){
    delete personaData["YoE"]
  }

  const experience = personaData["Experience"]?.filter((exp, index) => {
    if(index >= 10){
      return false
    }
    if(
      exp["Title"]?.trim().length === 0 &&
      exp["Company Name"]?.trim().length === 0 &&
      exp["Starting Year"]?.trim().length === 0 &&
      exp["Ending Year"]?.trim().length === 0 &&
      String(exp["Ongoing"])?.trim().length === 0
    ) {
      return false
    }
    return true
  }).map((exp) => {
    if(typeof exp["Ongoing"] === "string") {
      delete exp["Ongoing"]
    }
    return exp
  })

  if (experience?.length > 0){
    personaData["Experience"] = experience
  } else {
    delete personaData["Experience"]
  }

  const education = personaData["Education"]?.filter((edu, index) => {
    if(index >= 5){
      return false
    }
    if(
      edu["Institute"]?.trim().length === 0 &&
      edu["Qualification"]?.trim().length === 0 &&
      edu["CompletionYear"]?.trim().length === 0
    ) {
      return false
    }
    return true
  })

  if (education?.length > 0){
    personaData["Education"] = education
  } else {
    delete personaData["Education"]
  }

  const techSkills = personaData["Tech Skills"]?.filter((skill, index) => {
    if(index >= 5){
      return false
    }
    if(skill?.trim().length === 0) {
      return false
    }
    return true
  })

  if (techSkills?.length > 0){
    personaData["Tech Skills"] = techSkills
  } else {
    delete personaData["Tech Skills"]
  }

  const softSkills = personaData["Soft Skills"]?.filter((skill, index) => {
    if(index >= 5){
      return false
    }
    if(skill?.trim().length === 0) {
      return false
    }
    return true
  })

  if (softSkills?.length > 0){
    personaData["Soft Skills"] = softSkills
  } else {
    delete personaData["Soft Skills"]
  }

  const recRoles = personaData["Recommended Roles"]?.filter((role, index) => {
    if(index >= 3){
      return false
    }
    if(role?.trim().length === 0) {
      return false
    }
    return true
  })

  if (recRoles?.length > 0){
    personaData["Recommended Roles"] = recRoles
  } else {
    delete personaData["Recommended Roles"]
  }

  const certs = personaData["Certifications"]?.filter((cert, index) => {
    if(index >= 5){
      return false
    }
    if(cert?.trim().length === 0) {
      return false
    }
    return true
  })

  if (certs?.length > 0){
    personaData["Certifications"] = certs
  } else {
    delete personaData["Certifications"]
  }

  return personaData
}

const EditArrayCollection = ({
  array,
  label, addLabel, maxElements,
  defaultElement, prependElement,
  children
}) => {
  return <>
    <div className="text-[24px] font-bold mb-2 text-black/60">
      {label} <div className="inline font-semibold text-[20px]">{`(Max ${maxElements})`}</div>
      <GenericButton handleClick={()=> {
        if(array.length < maxElements){
          prependElement(defaultElement)
        }
      }} additionalStyling={"ml-2 px-3"}>
        {addLabel}
      </GenericButton>
    </div>
    {children}
  </>
}

const EditablePersonaInputElement = (
  {inputProps, labelKey, labelText, error, handleRemove, handleMoveUp, handleMoveDown}
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
      {<div>
        {handleMoveUp && <GenericButton handleClick={handleMoveUp} additionalStyling={"ml-2"}>
          &nbsp;&uarr;&nbsp;
        </GenericButton>}
        {handleMoveDown && <GenericButton handleClick={handleMoveDown} additionalStyling={"ml-2"}>
          &nbsp;&darr;&nbsp;
        </GenericButton>}
        {handleRemove && <GenericButton handleClick={handleRemove} additionalStyling={"ml-2 px-3"}>
          Delete
        </GenericButton>}
      </div>}
    </div>
    {error && <span className="text-errorColor font-semibold text-[16px]">{error.message}</span>}
  </div>
}

export default PersonaForm
