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
  return <div className="pt-5 text-[18px] text-black/50 inline-block underline">
    {label}
  </div>
}

const CandidateDetailText = ({value}) => {
  return <div className="text-[20px] font-semibold text-black/70 leading-none">
    {value}
  </div>
}

const CandidateDetailArray = ({label, values}) => {
  return <>
    {values.map((value, i) => {
      return <div key={i}>
        <CandidateDetailArrayElement label={label} value={value}/>
      </div>
    })}
  </>
}

const CandidateDetailArrayElement = ({label, value}) => {
  let element = null
  if(isString(value)) {
    element = <CandidateDetailText value={value}/>
  } else {
    if(Object.keys(allowedObjectKeys).includes(label)){
      element = <CandidateDetailObject label={label} values={value}/>
    }
  }
  return element
}

const CandidateDetailObject = ({label, values}) => {
  // TODO: Check object key. And display only specific keys.
  const keysToDisplay = allowedObjectKeys[label]
  return <>
    {keysToDisplay.map((key) => {
      const data = values[key]
      return <CandidateDetailText key={key} value={data}/>
    })}
  </>
}

export default CandidateDetailElement
