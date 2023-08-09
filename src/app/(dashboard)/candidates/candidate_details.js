import CloseIcon from "@/icons/close"

let isString = value => typeof value === "string"

const CandidateDetails = ({candidate, onClose}) => {
  if (!candidate) {
    return <></>
  }

  const candidatePersona = candidate.displayPersona
  console.log(candidatePersona)

  return (
    <div
      className="
        absolute right-0 top-[87px]
        w-[600px] h-[722px]
        p-[22px]
      bg-white rounded-l-lg
        drop-shadow-modalLeft
        backdrop-blur-none
        overflow-y-scroll
      "
      // The backdrop-blur-none is needed to fix dropshadow issue in safari.
    >
      <button
        className="float-right align-middle w-[34px] fill-bold hover:fill-dark"
        onClick={() => onClose()}
      >
        <CloseIcon/>
      </button>
      <div className="">
        <div className="text-[24px] font-normal text-black/70 leading-none">
          {candidate.id}
        </div>
      </div>
      {Object.keys(candidatePersona).map((key) => {
        const data = candidatePersona[key]
        if(Array.isArray(data)) {
          if(isString(data[0])) {
            return <CandidateDetailArray key={key} label={key} values={data}/>
          } else {
            // assuming array of objects
            return <CandidateDetailObject key={key} label={key} values={data}/>
          }
        }
        return <CandidateDetailString key={key} label={key} value={data}/>
      })}
    </div>
  )
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

const CandidateDetailString = ({label, value}) => {
  return <>
    <CandidateDetailLabel label={label}/>
    <CandidateDetailText value={value}/>
  </>
}

const CandidateDetailArray = ({label, values}) => {
  return <>
    <CandidateDetailLabel label={label}/>
    {values.map((value, i) => {
      return <div key={i}>
        <CandidateDetailText value={value}/>
      </div>
    })}

  </>
}

const CandidateDetailObject = ({label, values}) => {
  return <>
    <CandidateDetailLabel label={label}/>
    {values.map((value, i) => {
      return <div key={i}>
        {Object.keys(value).map((key) => {
          return <div key={key}>
            <CandidateDetailText value={value[key]}/>
          </div>
        })}
      </div>
    })}
  </>
}

export default CandidateDetails
