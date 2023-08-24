const CandidateRow = ({candidate, selected, setSelectedCandidateId, showTopBorder}) => {
  let textFontStyle = "font-normal"
  let hoverWrapper = "wrapperForHover"
  let topBorder = ""
  if (selected) {
    textFontStyle = "font-semibold"
    hoverWrapper = null
  }

  if (showTopBorder) {
    topBorder = "border-t-[1px]"
  }

  return (
    <div
      className={`contents cursor-pointer ${hoverWrapper}`}
      onClick={() => {
        setSelectedCandidateId(candidate.id)
      }}
    >
      <div className={`
        col-span-2 pr-5 py-1 pl-1
        border-b-[1px] border-subtleColor/30
        text-[28px] text-black/70
        ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle}`}>
          {candidate.name}
        </div>
      </div>
      <div className={`
        col-span-2 pr-5 py-1
        border-b-[1px] border-subtleColor/30
        text-[24px] text-black/50
        ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textFontStyle}`}>
          {candidate.designation}
        </div>
      </div>
      <div className={`
        col-span-2 pr-5 py-1
        border-b-[1px] border-subtleColor/30
        text-[24px] text-black/50
        ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textFontStyle}`}>
          {candidate.company}
        </div>
      </div>
      <div className={`
        col-span-1 py-1 pr-1
        border-b-[1px] border-subtleColor/30
        text-[24px] text-black/50 text-right
        ${topBorder}
      `}>
        <div className={`line-clamp-1 relative top-[4px] ${textFontStyle}`}>
          {candidate.updated_at}
        </div>
      </div>
    </div>
  )
}

export default CandidateRow
