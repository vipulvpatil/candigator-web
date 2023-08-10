let isString = value => typeof value === "string"

const CandidateDetailElement = ({label, value}) => {
  let valueElement
  if(Array.isArray(value)) {
    valueElement = <CandidateDetailArray values={value}/>
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

const CandidateDetailArray = ({values}) => {
  return <>
    {values.map((value, i) => {
      return <div key={i}>
        <CandidateDetailArrayElement value={value}/>
      </div>
    })}
  </>
}

const CandidateDetailArrayElement = ({value}) => {
  let element = null
  if(isString(value)) {
    element = <CandidateDetailText value={value}/>
  } else {
    // assume object
    element = <CandidateDetailObject values={value}/>
  }
  return element
}

const CandidateDetailObject = ({values}) => {
  // TODO: Check object key. And display only specific keys.
  return <>
    {Object.keys(values).map((key) => {
      const data = values[key]
      return <CandidateDetailText key={key} value={data}/>
    })}
  </>
}

export default CandidateDetailElement
