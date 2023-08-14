let isString = value => typeof value === "string"

const allowedArray = [
  "Tech Skills",
  "Soft Skills",
  "Recommended Roles",
  "Education",
  "Experience",
  "BuilderVersion",
  "BuiltBy",
  "FileUploadId"
]

const allowedObjectKeys = {
  "Education": [
    "Institute",
    "Qualification",
    "CompletionYear",
  ],
  "Experience": [
    "Title",
    "Company Name",
    "Starting Year",
    "Ending Year",
    "Ongoing",
  ]
}

const CandidateDetailElement = ({label, value}) => {
  let valueElement
  if(Array.isArray(value)) {
    if (allowedArray.includes(label)){
      valueElement = <CandidateDetailArray label={label} values={value}/>
    }
  } else {
    valueElement = <CandidateDetailText value={value}/>
  }
  return <>
    <CandidateDetailLabel label={label}/>
    {valueElement}
  </>
}

const CandidateDetailLabel = ({label}) => {
  return <div className="pt-4 text-[18px] text-black/50 inline-block">
    {label}
  </div>
}

const CandidateDetailText = ({value}) => {
  return <div className="text-[20px] font-semibold text-black/70 leading-none">
    {value}
  </div>
}

const CandidateDetailSubtext = ({value}) => {
  return <div className="text-[18px] font-normal text-black/70 leading-none">
    {value}
  </div>
}

const CandidateDetailArray = ({label, values}) => {
  return <>
    {values.map((value, i) => {
      return <div key={i}>
        <CandidateDetailArrayElement label={label} value={value} index={i}/>
      </div>
    })}
  </>
}

const CandidateDetailArrayElement = ({label, value, index}) => {
  let element = null
  let spaceElement = null
  if(isString(value)) {
    if (index !== 0) {
      spaceElement = <div className="h-1"/>
    }
    element = <CandidateDetailText value={value}/>
  } else {
    if (index !== 0) {
      spaceElement = <div className="h-2"/>
    }
    if(Object.keys(allowedObjectKeys).includes(label)){
      element = <CandidateDetailObject label={label} values={value}/>
    }
  }
  return <>
    {spaceElement}
    {element}
  </>
}

const CandidateDetailObject = ({label, values}) => {
  const keysToDisplay = allowedObjectKeys[label]
  if(label === "Education") {
    return <CandidateDetailEducation values={values}/>
  }
  if(label === "Experience") {
    return <CandidateDetailExperience values={values}/>
  }
  return <>
    {keysToDisplay.map((key, index) => {
      const data = values[key]
      if (data !== null){
        if (index == 0){
          return <CandidateDetailText key={key} value={data}/>
        } else {
          return <CandidateDetailSubtext key={key} value={data}/>
        }
      }
    })}
  </>
}

const CandidateDetailEducation = ({values}) => {
  return <div>
    <CandidateDetailText value={values["Institute"]}/>
    <CandidateDetailLeftAndRightFloat leftValue={values["Qualification"]} rightValue={values["CompletionYear"]}/>
  </div>
}

const CandidateDetailExperience = ({values}) => {
  return <div>
    <CandidateDetailText value={values["Title"]}/>
    <CandidateDetailLeftAndRightFloat
      leftValue={values["Company Name"]}
      rightValue={`${values["Starting Year"]} - ${values["Ending Year"]}`}
    />
  </div>
}

const CandidateDetailLeftAndRightFloat = ({leftValue, rightValue}) => {
  return <>
    <div className="pt-1 text-[18px] font-normal text-black/70 leading-none float-left">
      {leftValue}
    </div>
    <div className="pt-1 text-[18px] font-normal text-black/70 leading-none float-right">
      {rightValue}
    </div>
    <div className="clear-both"/>
  </>
}

export default CandidateDetailElement
