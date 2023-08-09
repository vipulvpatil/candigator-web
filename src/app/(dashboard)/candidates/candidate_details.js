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
          } else if(key === "Education"){
            return <CandidateDetailForEducation key={key} label={key} values={data}/>
          }else {
            // assuming array of objects
            return <CandidateDetailObject key={key} label={key} values={data}/>
          }
        }
        return <CandidateDetailString key={key} label={key} value={data}/>
      })}
    </div>
  )
}

const CandidateDetailString = ({label, value}) => {
  return <div className="pt-5">
    <div className="text-[18px] text-black/50">
      {label}
    </div>
    <div className="text-[24px] font-semibold text-black/70 leading-none">
      {value}
    </div>
  </div>
}

const CandidateDetailArray = ({label, values}) => {
  return <div className="pt-5">
    <div className="text-[18px] text-black/50">
      {label}
    </div>
    {values.map((value, i) => {
      return <div key={i} className="text-[24px] font-semibold text-black/70 leading-none">
        {value}
      </div>
    })}

  </div>
}

const CandidateDetailForEducation = ({label, values}) => {
  return <div className="pt-5">
    <div className="text-[18px] text-black/50">
      {label}
    </div>
    {values.map((value, i) => {
      let pt = "pt-4"
      if (i === 0) {
        pt = "pt-0"
      }
      return <div key={i} className={`${pt} text-[20px] font-normal text-black/90 leading-none`}>
        {Object.keys(value).map((key) => {
          let className = "pt-2"
          if(key === "Institute"){
            className = "font-semibold"
          }

          return <div key={key} className={`${className}`}>
            {value[key]}
          </div>
        })}
      </div>
    })}
  </div>
}

const CandidateDetailObject = ({label, values}) => {
  return <div className="pt-5">
    <div className="text-[18px] text-black/50">
      {label}
    </div>
    {values.map((value, i) => {
      return <div key={i} className="pt-3 text-[20px] font-normal text-black/90 leading-none">
        {Object.keys(value).map((key) => {
          return <div key={key}>
            {value[key]}
          </div>
        })}
      </div>
    })}
  </div>
}

export default CandidateDetails
