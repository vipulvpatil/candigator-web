import CloseIcon from "@/icons/close"

const CandidateDetails = ({candidate, onClose}) => {
  if (!candidate) {
    return <></>
  }

  return (
    <div
      className="
        absolute right-0 top-[83px] bottom-[27px]
        w-[600px]
        p-[22px]
        border-bold bg-white border-y-2 border-l-2 rounded-l-lg"
    >
      <button
        className="float-right align-middle w-[34px] fill-bold"
        onClick={() => onClose()}
      >
        <CloseIcon/>
      </button>
      <div className="">
        <div className="text-[24px] font-semibold text-black/70 leading-none">
          {candidate.id}
        </div>
      </div>
      <div className="pt-5">
        <div className="text-[18px] text-black/50">
          Name
        </div>
        <div className="text-[24px] font-semibold text-black/70 leading-none">
          {candidate.name}
        </div>
      </div>
      <div className="pt-5">
        <div className="text-[18px] text-black/50">
          Latest Position
        </div>
        <div className="text-[24px] font-semibold text-black/70 leading-none">
          {candidate.designation}
        </div>
      </div>
      <div className="pt-5">
        <div className="text-[18px] text-black/50">
          Latest Company
        </div>
        <div className="text-[24px] font-semibold text-black/70 leading-none">
          {candidate.company}
        </div>
      </div>
      <div className="pt-5">
        <div className="text-[18px] text-black/50">
          Last Updated
        </div>
        <div className="text-[24px] font-semibold text-black/70 leading-none">
          {candidate.updated_at}
        </div>
      </div>
    </div>
  )
}

export default CandidateDetails
