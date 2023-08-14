import CandidateDetailElement from "./candidate_details_elements"
import CloseIcon from "@/icons/close"

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
        className="float-right align-middle w-[34px] fill-button hover:fill-buttonDark"
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
        return <div key={key}>
          <CandidateDetailElement label={key} value={data}/>
        </div>
      })}
    </div>
  )
}

export default CandidateDetails
