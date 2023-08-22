const labelFont = "text-[18px] font-normal text-black/50"
const valueFont = "text-[20px] font-semibold text-black/70"
const subValueFont = "text-[18px] font-normal text-black/70"

const CandidateContactElement = ({label, value}) => {
  return <>
    {label && <div className={`${labelFont}`}>
      {label}
    </div>}
    {value && <div className={`${valueFont} leading-snug overflow-x-scroll overflow-y-clip`}>
      {value}
    </div>}
  </>
}

const CandidateExperienceElement = ({values}) => {
  return <div>
    <CandidateSimpleElement value={values["Title"]}/>
    <CandidateDetailLeftAndRightFloat
      leftValue={values["Company Name"]}
      rightValue={`${values["Starting Year"]} - ${values["Ending Year"]}`}
    />
  </div>
}

const CandidateEducationElement = ({values}) => {
  return <div>
    <CandidateSimpleElement value={values["Institute"]}/>
    <CandidateDetailLeftAndRightFloat
      leftValue={values["Qualification"]}
      rightValue={values["CompletionYear"]}
    />
  </div>
}

const CandidateDetailLeftAndRightFloat = ({leftValue, rightValue}) => {
  return <>
    <div className={`${subValueFont} py-1 leading-snug float-left`}>
      {leftValue}
    </div>
    <div className={`${subValueFont} py-1 leading-snug float-right`}>
      {rightValue}
    </div>
    <div className="clear-both"/>
  </>
}

const CandidateSkillElement = ({label, values}) => {
  return <>
    {label && <div className={`${labelFont}`}>
      {label}
    </div>}
    {values && Array.isArray(values) &&
      values.map((value, i) => {
        return <div key={i} className={`${valueFont} leading-snug overflow-x-scroll   overflow-y-clip flex`}>
          <div className="px-2">
            &bull;
          </div>
          <div className="inline-block">
            {value}
          </div>
        </div>
      })
    }
  </>
}

const CandidateArrayElement = ({label, values}) => {
  return <>
    {label && <div className={`${labelFont}`}>
      {label}
    </div>}
    {values && Array.isArray(values) &&
      values.map((value, i) => {
        return <div key={i} className={`${valueFont} leading-snug overflow-x-scroll   overflow-y-clip flex`}>
          <div className="px-2">
            &bull;
          </div>
          <div className="inline-block">
            {value}
          </div>
        </div>
      })
    }
  </>
}

export const CandidateSimpleElement = ({label, value}) => {
  return <>
    {label && <div className={`${labelFont} inline-block`}>
      {label}
    </div>}
    {value && <div className={`${valueFont} leading-snug`}>
      {value}
    </div>}
  </>

}

export const CandidateContactDetails = ({candidatePersona}) => {
  const email = candidatePersona["Email"]
  const phone = candidatePersona["Phone"] || "N/A"
  const city = candidatePersona["City"] || "N/A"
  const state = candidatePersona["State"] || "N/A"
  const country = candidatePersona["Country"] || "N/A"

  return <div className="border-solid border-2 border-subtle/50 rounded-md clear-both">
    <div className="clear-both">
      <div className="w-[50%] inline-block border-subtle/50 border-r-2 border-b-2 p-1">
        <CandidateContactElement label="Email" value={email}/>
      </div>
      <div className="w-[50%] inline-block border-subtle/50 border-b-2 p-1">
        <CandidateContactElement label="Phone" value={phone}/>
      </div>
    </div>
    <div className="clear-both">
      <div className="w-[33%] inline-block border-subtle/50 border-r-2 p-1">
        <CandidateContactElement label="City" value={city}/>
      </div>
      <div className="w-[33%] inline-block border-subtle/50 border-r-2 p-1">
        <CandidateContactElement label="State" value={state}/>
      </div>
      <div className="w-[33%] inline-block p-1">
        <CandidateContactElement label="Country" value={country}/>
      </div>
    </div>
  </div>
}

export const CandidateExperienceDetails = ({candidatePersona}) => {
  const data = candidatePersona["Experience"] || []
  return <div className="border-solid border-2 border-subtle/50 rounded-md p-1">
    <CandidateSimpleElement label={"Years of experience"} value={candidatePersona["YoE"]}/>
    {data.map((value, i) => {
      let spaceElement = <div className="h-1"/>
      let element = <CandidateExperienceElement values={value}/>
      return <div key={i} className="border-solid border-t-2 border-subtle/50">
        {spaceElement}
        {element}
      </div>
    })}
  </div>
}

export const CandidateEducationDetails = ({candidatePersona}) => {
  const data = candidatePersona["Education"] || []
  return <div className="border-solid border-2 border-subtle/50 rounded-md p-1">
    <CandidateSimpleElement label={"Education"}/>
    {data.map((value, i) => {
      let spaceElement = <div className="h-1"/>
      let element = <CandidateEducationElement values={value}/>
      return <div key={i} className="border-solid border-t-2 border-subtle/50">
        {spaceElement}
        {element}
      </div>
    })}
  </div>
}

export const CandidateSkillDetails = ({candidatePersona}) => {
  const techSkills = candidatePersona["Tech Skills"] || ["N/A"]
  const softSkills = candidatePersona["Soft Skills"] || ["N/A"]

  return <div className="border-solid border-2 border-subtle/50 rounded-md clear-both table table-fixed">
    <div className="w-[50%] h-full table-cell border-subtle/50 border-r-2 p-1 align-top">
      <CandidateSkillElement label="Technical skills" values={techSkills}/>
    </div>
    <div className="w-[50%] h-full table-cell border-subtle/50 p-1 align-top">
      <CandidateSkillElement label="Soft skills" values={softSkills}/>
    </div>
  </div>
}

export const CandidateRoleDetails = ({candidatePersona}) => {
  const roles = candidatePersona["Recommended Roles"] || ["N/A"]

  return <div className="border-solid border-2 border-subtle/50 rounded-md clear-both">
    <div className="w-[50%] h-full table-cell p-1 align-top">
      <CandidateArrayElement label="Recommended Roles" values={roles}/>
    </div>
  </div>
}

export const CandidateCertDetails = ({candidatePersona}) => {
  const certs = candidatePersona["Certificates"] || ["None"]

  return <div className="border-solid border-2 border-subtle/50 rounded-md clear-both">
    <div className="w-[50%] h-full table-cell p-1 align-top">
      <CandidateArrayElement label="Certificates" values={certs}/>
    </div>
  </div>
}
