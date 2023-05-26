const CandidateRow = ({candidate}) => {
  return <div className="contents cursor-pointer rowWrapper">
    <div className="
      col-span-2 pr-5 py-1
      border-b-[1px] border-subtle
      text-[28px] font-regular text-black/70
    ">
      <div className="line-clamp-1">
        {candidate.name}
      </div>
    </div>
    <div className="
      col-span-2 pr-5 py-1
      border-b-[1px] border-subtle
      text-[24px] text-black/50
    ">
      <div className="line-clamp-1 relative top-[4px]">
        {candidate.designation}
      </div>
    </div>
    <div className="
      col-span-2 pr-5 py-1
      border-b-[1px] border-subtle
      text-[24px] text-black/50
    ">
      <div className="line-clamp-1 relative top-[4px]">
        {candidate.company}
      </div>
    </div>
    <div className="
      col-span-1 py-1
      border-b-[1px] border-subtle
      text-[24px] text-black/50 text-right
    ">
      <div className="line-clamp-1 relative top-[4px]">
        {candidate.updated_at}
      </div>
    </div>
  </div>
}

export default CandidateRow
