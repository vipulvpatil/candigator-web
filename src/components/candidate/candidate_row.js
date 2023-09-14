const CandidateRow = ({candidate, selected, setSelectedCandidateId, showTopBorder, view}) => {
  let textFontStyle = "font-normal"
  let textColor1 = "text-black/70"
  let textColor2 = "text-black/50"
  let hoverWrapper = "wrapperForHover"
  let bgColor
  let topBorder = ""
  if (selected) {
    textFontStyle = "font-semibold"
    textColor1 = "text-primaryColor"
    textColor2 = "text-primaryColor"
    hoverWrapper = null
    bgColor = "bg-subtleColor/50"
  }

  if (showTopBorder) {
    topBorder = "border-t-2"
  }

  let rowDetails
  if (view === "short") {
    rowDetails = <div className={`
      col-span-7 pr-5 py-1 pl-1
      border-b-2 border-subtleColor
      flex items-center
      text-[28px] ${textColor1}
      ${bgColor} ${topBorder}
    `}>
      <div className={`line-clamp-1 ${textFontStyle}`}>
        {candidate.name}
      </div>
    </div>
  } else {
    rowDetails = <>
      <div className={`
        col-span-3 pr-5 py-1 pl-1
        border-b-2 border-subtleColor
        flex items-center
        text-[28px] ${textColor1}
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle}`}>
          {candidate.name}
        </div>
      </div>
      <div className={`
        col-span-2 pr-5 py-1
        border-b-2 border-subtleColor
        flex items-center
        text-[24px] ${textColor2}
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle}`}>
          {candidate.designation}
        </div>
      </div>
      <div className={`
        col-span-2 py-1 pr-1
        border-b-2 border-subtleColor
        flex items-center justify-end
        text-[24px] ${textColor2} text-right
        ${bgColor} ${topBorder}
      `}>
        <div className={`line-clamp-1 ${textFontStyle}`}>
          {candidate.updatedAtString}
        </div>
      </div>
    </>
  }

  return (
    <div
      className={`contents cursor-pointer ${hoverWrapper} ${bgColor}`}
      onClick={() => {
        setSelectedCandidateId(candidate.id)
      }}
    >
      {rowDetails}
    </div>
  )
}

export default CandidateRow
